package com.ssafy.meongnyang.api.service;

import com.ssafy.meongnyang.api.request.LostRegisterDto;
import com.ssafy.meongnyang.api.request.LostUpdateDto;
import com.ssafy.meongnyang.api.request.ShowPetRegisterDto;
import com.ssafy.meongnyang.api.response.LostResponseDto;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface LostService {
    int writeLost(LostRegisterDto lostRegisterDto);
    int updateLost(LostUpdateDto lostUpdateDto);
    List<LostResponseDto> getLostList();
    int deleteLost(int id);
    List<ShowPetRegisterDto> getUserLostList(int id);
}
