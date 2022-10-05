package com.ssafy.meongnyang.api.service;

import com.ssafy.meongnyang.api.request.LostRegisterDto;
import com.ssafy.meongnyang.api.request.LostUpdateDto;
import com.ssafy.meongnyang.api.response.LostResponseDto;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface LostService {
    LostResponseDto writeLost(LostRegisterDto lostRegisterDto);
    LostResponseDto updateLost(LostUpdateDto lostUpdateDto);
    List<LostResponseDto> getLostList();
    boolean deleteLost(Long id);
    List<LostResponseDto> getUserLostList(Long id);
}