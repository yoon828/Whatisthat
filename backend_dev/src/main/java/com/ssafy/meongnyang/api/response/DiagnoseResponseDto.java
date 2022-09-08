package com.ssafy.meongnyang.api.response;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class DiagnoseResponseDto {
    private Long id;
    private Long user_id;
    private String name;
    private String img_url;
    private String disease_name;
    private String treat;
}
