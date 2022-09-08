package com.ssafy.meongnyang.api.service;

import com.ssafy.meongnyang.api.request.DiagnoseRegisterDto;
import com.ssafy.meongnyang.api.response.DiagnoseListResponseDto;
import com.ssafy.meongnyang.api.response.DiagnoseResponseDto;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface DiagnoseService {
    DiagnoseResponseDto writeDiagnose(DiagnoseRegisterDto diagnoseRegisterDto);
    boolean deleteDiagnose(long id);
    List<DiagnoseListResponseDto> getDiagnoseList(long id);
    DiagnoseResponseDto getDiagnose(long id);
}
