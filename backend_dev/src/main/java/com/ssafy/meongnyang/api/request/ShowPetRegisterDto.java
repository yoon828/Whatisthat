package com.ssafy.meongnyang.api.request;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.util.List;

@Getter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class ShowPetRegisterDto {
//    private Long user_id;   //토큰 만들면 삭제
    private String title;
    private String name;
    private String content;
    private List<String> imgs;
}
