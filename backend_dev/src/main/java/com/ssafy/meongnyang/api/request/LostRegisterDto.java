package com.ssafy.meongnyang.api.request;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class LostRegisterDto {
    private String title;
    private Integer gender;
    private String lost_date;
    private String age;
    private String weight;
    private String kind;
    private String place;
    private String phone;
    private String pay;
    private String etc;
    private boolean isfound;
    private String name;
}
