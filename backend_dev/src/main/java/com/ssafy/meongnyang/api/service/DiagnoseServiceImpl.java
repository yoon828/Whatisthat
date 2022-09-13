package com.ssafy.meongnyang.api.service;

import com.ssafy.meongnyang.api.request.DiagnoseRegisterDto;
import com.ssafy.meongnyang.api.response.DiagnoseListResponseDto;
import com.ssafy.meongnyang.api.response.DiagnoseResponseDto;
import com.ssafy.meongnyang.common.exception.handler.DiagnoseNotFoundException;
import com.ssafy.meongnyang.common.exception.handler.DiseaseNotFoundException;
import com.ssafy.meongnyang.common.exception.handler.UserNotFoundException;
import com.ssafy.meongnyang.db.entity.Diagnose;
import com.ssafy.meongnyang.db.entity.Disease;
import com.ssafy.meongnyang.db.entity.User;
import com.ssafy.meongnyang.db.repository.DiagnoseRepository;
import com.ssafy.meongnyang.db.repository.DiseaseRepository;
import com.ssafy.meongnyang.db.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.stream.Collectors;
@Transactional
@Service
@RequiredArgsConstructor
public class DiagnoseServiceImpl implements DiagnoseService {
    private final DiagnoseRepository diagnoseRepository;
    private final UserRepository userRepository;
    private final DiseaseRepository diseaseRepository;

    @Override
    public DiagnoseResponseDto writeDiagnose(DiagnoseRegisterDto diagnoseRegisterDto) {
        User user = userRepository.findById(diagnoseRegisterDto.getUser_id()).orElseThrow(UserNotFoundException::new);
        Disease disease = diseaseRepository.findByCode(diagnoseRegisterDto.getCode()).orElseThrow(DiseaseNotFoundException::new);

        Diagnose diagnose = Diagnose.builder()
                .code(diagnoseRegisterDto.getCode())
                .name(diagnoseRegisterDto.getName())
                .species(diagnoseRegisterDto.getSpecies())
                .type(diagnoseRegisterDto.getType())
                .user(user)
                .img_url(diagnoseRegisterDto.getImg_url()).build();

        Diagnose diagnoseResponse = diagnoseRepository.save(diagnose);

        DiagnoseResponseDto diagnoseResponseDto = DiagnoseResponseDto.builder()
                .id(diagnoseResponse.getId())
                .name(diagnoseResponse.getName())
                .user_name(diagnoseResponse.getUser().getName())
                .disease_name(disease.getName())
                .treat(disease.getTreat())
                .img_url(diagnoseResponse.getImg_url()).build();

        return diagnoseResponseDto;
    }

    @Override
    public boolean deleteDiagnose(Long id) {
        diagnoseRepository.findById(id).orElseThrow(DiagnoseNotFoundException::new);
        diagnoseRepository.deleteById(id);
        return true;
    }

    @Override
    @Transactional(readOnly = true)
    public List<DiagnoseListResponseDto> getDiagnoseList(Long id) {
        User user = userRepository.findById(id).orElseThrow(UserNotFoundException::new);

        List<DiagnoseListResponseDto> list = user.getDiagnoseList()
                .stream()
                .map(diagnose -> DiagnoseListResponseDto.builder()
                        .id(diagnose.getId())
                        .date(diagnose.getDate())
                        .name(diagnose.getName())
                        .disease_name(diseaseRepository.findByCode(diagnose.getCode()).orElseThrow(DiseaseNotFoundException::new).getName())
                        .build())
                .sorted((o1, o2) -> o2.getDate().compareTo(o1.getDate()))
                .collect(Collectors.toList());
        return list;
    }

    @Override
    @Transactional(readOnly = true)
    public DiagnoseResponseDto getDiagnose(Long id) {
        Diagnose diagnose = diagnoseRepository.findById(id).orElseThrow(DiagnoseNotFoundException::new);
        Disease disease = diseaseRepository.findByCode(diagnose.getCode()).orElseThrow(DiseaseNotFoundException::new);

        return DiagnoseResponseDto.builder()
                .id(diagnose.getId())
                .name(diagnose.getName())
                .user_name(diagnose.getUser().getName())
                .img_url(diagnose.getImg_url())
                .disease_name(disease.getName())
                .treat(disease.getTreat())
                .build();
    }
}
