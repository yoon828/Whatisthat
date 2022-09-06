package com.ssafy.meongnyang.api.service;

import com.ssafy.meongnyang.api.request.DiagnoseRegisterDto;
import com.ssafy.meongnyang.api.response.DiagnoseListResponseDto;
import com.ssafy.meongnyang.api.response.DiagnoseResponseDto;

import java.util.List;

public interface DiagnoseService {
    int writeDiagnose(DiagnoseRegisterDto diagnoseRegisterDto);
    int deleteDiagnose(int id);
    List<DiagnoseListResponseDto> getDiagnoseList(int id);
    DiagnoseResponseDto getDiagnose(int id);
}
