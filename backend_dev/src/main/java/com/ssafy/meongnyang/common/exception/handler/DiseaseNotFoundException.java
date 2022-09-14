package com.ssafy.meongnyang.common.exception.handler;

public class DiseaseNotFoundException extends RuntimeException {
    public DiseaseNotFoundException() {super("해당 질환을 찾을 수 없습니다.");}

    public DiseaseNotFoundException(String msg) {super("해당 질환을 찾을 수 없습니다.");}

    public DiseaseNotFoundException(String msg, Throwable cause) {
        super(msg, cause);
    }

    public DiseaseNotFoundException(Throwable cause) {super(cause);}

    protected DiseaseNotFoundException(String msg, Throwable cause, boolean enableSuppression, boolean writableStackTrace) {
        super(msg, cause, enableSuppression, writableStackTrace);
    }
}
