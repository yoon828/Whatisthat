package com.ssafy.meongnyang.api.service;

import com.ssafy.meongnyang.api.request.LostRegisterDto;
import com.ssafy.meongnyang.api.request.LostUpdateDto;
import com.ssafy.meongnyang.api.response.LostImgResponseDto;
import com.ssafy.meongnyang.api.response.LostResponseDto;
import com.ssafy.meongnyang.common.exception.handler.CustomNotFoundException;
import com.ssafy.meongnyang.db.entity.Lost;
import com.ssafy.meongnyang.db.entity.LostImg;
import com.ssafy.meongnyang.db.entity.User;
import com.ssafy.meongnyang.db.repository.LostRepository;
import com.ssafy.meongnyang.db.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class LostServiceImpl implements LostService {
    private final LostRepository lostRepository;
    private final UserRepository userRepository;

    @Override
    public LostResponseDto writeLost(LostRegisterDto lostRegisterDto) {
        User user = userRepository.findById(lostRegisterDto.getUser_id()).orElseThrow(CustomNotFoundException::new);
        Lost lost = Lost.builder()
                .user(user)
                .lost_date(lostRegisterDto.getLost_date())
                .age(lostRegisterDto.getAge())
                .gender(lostRegisterDto.getGender())
                .etc(lostRegisterDto.getEtc())
                .kind(lostRegisterDto.getKind())
                .title(lostRegisterDto.getTitle())
                .weight(lostRegisterDto.getWeight())
                .place(lostRegisterDto.getPlace())
                .name(lostRegisterDto.getName())
                .pay(lostRegisterDto.getPay())
                .phone(lostRegisterDto.getPhone())
                .build();

        Lost lostResponse = lostRepository.save(lost);

        return null;
    }

    @Override
    public LostResponseDto updateLost(LostUpdateDto lostUpdateDto) {
        return null;
    }

    @Override
    public List<LostResponseDto> getLostList() {
        return lostRepository.findAll(Sort.by(Sort.Direction.DESC, "date"))
                .stream()
                .map(LostServiceImpl::apply)
                .collect(Collectors.toList());
//                .stream()
//                .map(lost -> LostResponseDto.builder()
//                        .id(lost.getId())
//                        .age(lost.getAge())
//                        .etc(lost.getEtc())
//                        .gender(lost.getGender())
//                        .kind(lost.getKind())
//                        .pay(lost.getPay())
//                        .lost_date(lost.getLost_date())
//                        .weight(lost.getWeight())
//                        .phone(lost.getPhone())
//                        .is_found(lost.getIs_found())
//                        .title(lost.getTitle())
//                        .date(lost.getDate())
//                        .name(lost.getName())
//                        .imgs(lost.getLostImgList()
//                                .stream()
//                                .map(lostImg -> LostImgResponseDto.builder()
//                                        .img_url(lostImg.getImg_url())
//                                        .lost_id(lostImg.getLost().getId())
//                                        .id(lostImg.getId())
//                                        .build())
//                                .collect(Collectors.toList()))
//                        .build())
//                .collect(Collectors.toList());
    }

    @Override
    public boolean deleteLost(Long id) {
        lostRepository.findById(id).orElseThrow(CustomNotFoundException::new);
        lostRepository.deleteById(id);
        return true;
    }

    @Override
    public List<LostResponseDto> getUserLostList(Long id) {
        return lostRepository.findAllById(id)
                .stream()
                .map(LostServiceImpl::apply)
                .collect(Collectors.toList());
    }

    private static LostResponseDto apply(Lost lost) {
        return LostResponseDto.builder()
                .id(lost.getId())
                .age(lost.getAge())
                .etc(lost.getEtc())
                .gender(lost.getGender())
                .kind(lost.getKind())
                .pay(lost.getPay())
                .lost_date(lost.getLost_date())
                .weight(lost.getWeight())
                .phone(lost.getPhone())
                .is_found(lost.getIs_found())
                .title(lost.getTitle())
                .date(lost.getDate())
                .name(lost.getName())
                .imgs(lost.getLostImgList()
                        .stream()
                        .map(lostImg -> LostImgResponseDto.builder()
                                .img_url(lostImg.getImg_url())
                                .lost_id(lostImg.getLost().getId())
                                .id(lostImg.getId())
                                .build())
                        .collect(Collectors.toList()))
                .build();
    }
}
