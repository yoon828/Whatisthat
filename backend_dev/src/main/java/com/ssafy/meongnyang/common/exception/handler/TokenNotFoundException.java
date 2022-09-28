package com.ssafy.meongnyang.common.exception.handler;

public class TokenNotFoundException extends IllegalArgumentException {
    public TokenNotFoundException() {
        super("토큰을 찾을 수 없습니다.");
    }

    public TokenNotFoundException(String s) {
        super(s);
    }

    public TokenNotFoundException(String message, Throwable cause) {
        super(message, cause);
    }

    public TokenNotFoundException(Throwable cause) {
        super(cause);
    }
}