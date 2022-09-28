package com.ssafy.meongnyang.api.service;

import com.ssafy.meongnyang.api.request.DiagnoseRegisterDto;
import com.ssafy.meongnyang.api.response.DiagnoseListResponseDto;
import com.ssafy.meongnyang.api.response.DiagnoseResponseDto;
import com.ssafy.meongnyang.common.exception.handler.DiagnoseNotFoundException;
import com.ssafy.meongnyang.common.exception.handler.DiseaseNotFoundException;
import com.ssafy.meongnyang.common.exception.handler.UserNotFoundException;
import com.ssafy.meongnyang.common.util.TokenProvider;
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
    private final TokenProvider tokenProvider;

    @Override
    public DiagnoseResponseDto writeDiagnose(String accessToken, DiagnoseRegisterDto diagnoseRegisterDto) {
        Long id = tokenProvider.getUserId(accessToken);
        User user = userRepository.findById(id).orElseThrow(UserNotFoundException::new);
        Disease disease1 = diseaseRepository.findByName(diagnoseRegisterDto.getDisease_name1()).orElseThrow(DiseaseNotFoundException::new);
        Disease disease2 = diseaseRepository.findByName(diagnoseRegisterDto.getDisease_name2()).orElseThrow(DiseaseNotFoundException::new);
        Disease disease3 = diseaseRepository.findByName(diagnoseRegisterDto.getDisease_name3()).orElseThrow(DiseaseNotFoundException::new);

        Diagnose diagnose = Diagnose.builder()
//                .code(diagnoseRegisterDto.getCode())
                .name(diagnoseRegisterDto.getName())
                .species(diagnoseRegisterDto.getSpecies())
                .type(diagnoseRegisterDto.getType())
                .user(user)
                .img_url(diagnoseRegisterDto.getImg_url())
                .disease_name1(diagnoseRegisterDto.getDisease_name1())
                .probability1(diagnoseRegisterDto.getProbability1())
                .disease_name2(diagnoseRegisterDto.getDisease_name2())
                .probability2(diagnoseRegisterDto.getProbability2())
                .disease_name3(diagnoseRegisterDto.getDisease_name3())
                .probability3(diagnoseRegisterDto.getProbability3())
                .build();


        Diagnose diagnoseResponse = diagnoseRepository.save(diagnose);

        DiagnoseResponseDto diagnoseResponseDto = DiagnoseResponseDto.builder()
                .id(diagnoseResponse.getId())
                .name(diagnoseResponse.getName())
                .user_name(diagnoseResponse.getUser().getName())
                .disease_name1(diagnoseResponse.getDisease_name1())
                .probability1(diagnoseResponse.getProbability1())
                .treat1(disease1.getTreat())
                .disease_name2(diagnoseResponse.getDisease_name2())
                .probability2(diagnoseResponse.getProbability2())
                .treat2(disease2.getTreat())
                .disease_name3(diagnoseResponse.getDisease_name3())
                .probability3(diagnoseResponse.getProbability3())
                .treat3(disease3.getTreat())
                .img_url(diagnoseResponse.getImg_url())
                .build();

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
    public List<DiagnoseListResponseDto> getDiagnoseList(String accessToken) {
        Long id = tokenProvider.getUserId(accessToken);
        User user = userRepository.findById(id).orElseThrow(UserNotFoundException::new);

        List<DiagnoseListResponseDto> list = user.getDiagnoseList()
                .stream()
                .map(diagnose -> DiagnoseListResponseDto.builder()
                        .id(diagnose.getId())
                        .date(diagnose.getDate())
                        .name(diagnose.getName())
                        .disease_name(diagnose.getDisease_name1())
                        .build())
                .sorted((o1, o2) -> o2.getDate().compareTo(o1.getDate()))
                .collect(Collectors.toList());
        return list;
    }

    @Override
    @Transactional(readOnly = true)
    public DiagnoseResponseDto getDiagnose(Long id) {
        Diagnose diagnose = diagnoseRepository.findById(id).orElseThrow(DiagnoseNotFoundException::new);
        Disease disease1 = diseaseRepository.findByName(diagnose.getDisease_name1()).orElseThrow(DiseaseNotFoundException::new);
        Disease disease2 = diseaseRepository.findByName(diagnose.getDisease_name2()).orElseThrow(DiseaseNotFoundException::new);
        Disease disease3 = diseaseRepository.findByName(diagnose.getDisease_name3()).orElseThrow(DiseaseNotFoundException::new);

        return DiagnoseResponseDto.builder()
                .id(diagnose.getId())
                .name(diagnose.getName())
                .user_name(diagnose.getUser().getName())
                .img_url(diagnose.getImg_url())
                .disease_name1(diagnose.getDisease_name1())
                .probability1(diagnose.getProbability1())
                .treat1(disease1.getTreat())
                .disease_name2(diagnose.getDisease_name2())
                .probability2(diagnose.getProbability2())
                .treat2(disease2.getTreat())
                .disease_name3(diagnose.getDisease_name3())
                .probability3(diagnose.getProbability3())
                .treat3(disease3.getTreat())
                .build();
    }
}
