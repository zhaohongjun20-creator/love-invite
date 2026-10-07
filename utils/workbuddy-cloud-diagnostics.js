function diagnosticObject(value) {
    if (typeof value === 'string') {
        try {
            value = JSON.parse(value);
        } catch {
            return {};
        }
    }
    return value !== null && typeof value === 'object' ? value : {};
}

function diagnosticText(value) {
    return typeof value === 'string' ? value.slice(0, 512) : undefined;
}

function responseHeader(headers, name) {
    const key = Object.keys(headers || {}).find(key => key.toLowerCase() === name);
    return key ? diagnosticText(headers[key]) : undefined;
}

function logFailure(options, startedAt, status, data, headers) {
    const url = options.url.split(/[?#]/, 1)[0].replace(/^(https?:\/\/)[^/]*@/, '$1');
    const payload = diagnosticObject(data);
    const nestedError = typeof payload.error === 'object' ? diagnosticObject(payload.error) : {};
    let code = payload.code;
    if (typeof payload.error === 'string') code = payload.error;
    else if (nestedError.code !== undefined) code = nestedError.code;
    const rawMessage = payload.error_description || nestedError.message || payload.message;
    const message = typeof rawMessage === 'string'
        ? diagnosticText(rawMessage.split(options.url).join(url))
        : undefined;
    const login = /^https?:\/\/[^/]+\/\.cloud\/auth\/v1\/login-wechat$/.test(url)
        ? diagnosticObject(options.data)
        : {};

    // 只记录失败摘要，避免凭据、查询参数和完整响应体进入手机日志。
    console.error('[WorkBuddy Cloud] request failed', JSON.stringify({
        stage: status === 0 ? 'network' : 'http',
        method: (options.method || 'GET').toUpperCase(),
        url,
        status,
        durationMs: Date.now() - startedAt,
        appid: diagnosticText(login.appid),
        code: typeof code === 'number' ? code : diagnosticText(code),
        message: message || `HTTP ${status}`,
        requestId: responseHeader(headers, 'x-request-id'),
        traceId: responseHeader(headers, 'x-trace-id'),
    }));
}

function createDiagnosticWx(originalWx) {
    // 自定义 wx 适配器可能只实现请求和存储接口。
    if (typeof originalWx.getAccountInfoSync === 'function') {
        const appid = originalWx.getAccountInfoSync().miniProgram.appId;
        console.info('[WorkBuddy Cloud] initialized', JSON.stringify({ appid }));
    }

    return {
        request(options) {
            const startedAt = Date.now();
            return originalWx.request({
                ...options,
                success(result) {
                    if (result.statusCode < 200 || result.statusCode >= 300) {
                        logFailure(options, startedAt, result.statusCode, result.data, result.header);
                    }
                    if (options.success) options.success.call(this, result);
                },
                fail(result) {
                    if (result.errMsg !== 'request:fail abort') {
                        logFailure(options, startedAt, 0, { message: result.errMsg });
                    }
                    if (options.fail) options.fail.call(this, result);
                },
            });
        },
        getStorageSync(key) {
            return originalWx.getStorageSync(key);
        },
        setStorageSync(key, value) {
            return originalWx.setStorageSync(key, value);
        },
        removeStorageSync(key) {
            return originalWx.removeStorageSync(key);
        },
    };
}

module.exports = { createDiagnosticWx };
