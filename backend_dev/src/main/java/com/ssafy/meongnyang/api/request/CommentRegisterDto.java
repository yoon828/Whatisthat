package com.ssafy.meongnyang.api.request;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class CommentRegisterDto {
    private Long id;    // 글 id
    private Long user_id;   // 토큰 사용하면 삭제할 변수
    private String content;
}
