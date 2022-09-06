package com.ssafy.meongnyang.api.service;

import com.ssafy.meongnyang.api.request.ShowPetRegisterDto;
import com.ssafy.meongnyang.api.request.ShowPetUpdateDto;
import com.ssafy.meongnyang.api.response.ShowPetDetailResponseDto;
import com.ssafy.meongnyang.api.response.ShowPetListResponseDto;

import java.util.List;

public interface ShowPetService {
    int writeShowPet(ShowPetRegisterDto showPetRegisterDto);
    int updateShowPet(ShowPetUpdateDto showPetUpdateDto);
    List<ShowPetListResponseDto> getShowPetList();
    ShowPetDetailResponseDto getShowPet(int id);
    int deleteShowPet(int id);
    List<ShowPetListResponseDto> getUserShowPetList(int id);
}
