package com.ssafy.meongnyang.common.exception.handler;

public class CustomNotFoundException extends RuntimeException {
    public CustomNotFoundException() {super("찾을 수 없습니다.");}

    public CustomNotFoundException(String msg) {super("찾을 수 없습니다.");}

    public CustomNotFoundException(String msg, Throwable cause) {
        super(msg, cause);
    }

    public CustomNotFoundException(Throwable cause) {super(cause);}

    protected CustomNotFoundException(String msg, Throwable cause, boolean enableSuppression, boolean writableStackTrace) {
        super(msg, cause, enableSuppression, writableStackTrace);
    }
}
