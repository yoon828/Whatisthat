package com.ssafy.meongnyang.api.service;

import com.ssafy.meongnyang.api.request.ShowPetRegisterDto;
import com.ssafy.meongnyang.api.request.ShowPetUpdateDto;
import com.ssafy.meongnyang.api.response.ShowPetDetailResponseDto;
import com.ssafy.meongnyang.api.response.ShowPetListResponseDto;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface ShowPetService {
    ShowPetDetailResponseDto writeShowPet(ShowPetRegisterDto showPetRegisterDto);
    ShowPetDetailResponseDto updateShowPet(ShowPetUpdateDto showPetUpdateDto);
    List<ShowPetListResponseDto> getShowPetList();
    ShowPetDetailResponseDto getShowPet(long id);
    boolean deleteShowPet(long id);
    List<ShowPetListResponseDto> getUserShowPetList(long id);
}
