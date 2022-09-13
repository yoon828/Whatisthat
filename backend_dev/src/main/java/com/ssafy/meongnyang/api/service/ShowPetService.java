package com.ssafy.meongnyang.api.service;

import com.ssafy.meongnyang.api.request.ShowPetRegisterDto;
import com.ssafy.meongnyang.api.request.ShowPetUpdateDto;
import com.ssafy.meongnyang.api.response.ShowPetDetailResponseDto;
import com.ssafy.meongnyang.api.response.ShowPetListResponseDto;
import com.ssafy.meongnyang.api.response.ShowPetResponseDto;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface ShowPetService {
    ShowPetResponseDto writeShowPet(ShowPetRegisterDto showPetRegisterDto);
    ShowPetResponseDto updateShowPet(ShowPetUpdateDto showPetUpdateDto);
    List<ShowPetListResponseDto> getShowPetList();
    ShowPetDetailResponseDto getShowPet(Long id);
    boolean deleteShowPet(Long id);
    List<ShowPetListResponseDto> getUserShowPetList(Long id);
}
