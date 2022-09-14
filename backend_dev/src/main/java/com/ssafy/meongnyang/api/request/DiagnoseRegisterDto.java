package com.ssafy.meongnyang.api.request;

import com.ssafy.meongnyang.api.response.DiseaseResponseDto;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class DiagnoseRegisterDto {
    private Long user_id;   // 토큰 사용하면 삭제할 변수
    private Integer species;
    private String name;
    private Integer type;
    private String img_url;
    private String code;
}
