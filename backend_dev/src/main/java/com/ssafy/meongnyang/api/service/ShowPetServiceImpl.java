package com.ssafy.meongnyang.api.service;

import com.ssafy.meongnyang.api.request.ShowPetRegisterDto;
import com.ssafy.meongnyang.api.request.ShowPetUpdateDto;
import com.ssafy.meongnyang.api.response.ShowPetDetailResponseDto;
import com.ssafy.meongnyang.api.response.ShowPetListResponseDto;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class ShowPetServiceImpl implements ShowPetService {
    @Override
    public ShowPetDetailResponseDto writeShowPet(ShowPetRegisterDto showPetRegisterDto) {
        return null;
    }

    @Override
    public ShowPetDetailResponseDto updateShowPet(ShowPetUpdateDto showPetUpdateDto) {
        return null;
    }

    @Override
    public List<ShowPetListResponseDto> getShowPetList() {
        return null;
    }

    @Override
    public ShowPetDetailResponseDto getShowPet(long id) {
        return null;
    }

    @Override
    public boolean deleteShowPet(long id) {
        return false;
    }

    @Override
    public List<ShowPetListResponseDto> getUserShowPetList(long id) {
        return null;
    }
}
