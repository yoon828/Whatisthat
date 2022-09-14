package com.ssafy.meongnyang.api.request;

import com.ssafy.meongnyang.db.entity.ShowPetImg;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.util.List;

@Getter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class ShowPetUpdateDto {
    private Long user_id;   //토큰 만들면 삭제
    private Long id;
    private String title;
    private String name;
    private String content;
    private List<String> imgs;
}
