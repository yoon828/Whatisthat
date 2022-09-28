package com.ssafy.meongnyang.api.request;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class DiagnoseRegisterDto {
//    private Long user_id;   // 토큰 사용하면 삭제할 변수
    private Integer species;
    private String name;
    private Integer type;
    private String img_url;
//    private String code;
    private String disease_name1;
    private String probability1;

    private String disease_name2;
    private String probability2;

    private String disease_name3;
    private String probability3;
}
