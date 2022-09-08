package com.ssafy.meongnyang.api.service;

import com.ssafy.meongnyang.api.request.UserRegisterDto;
import com.ssafy.meongnyang.api.request.UserUpdateDto;
import com.ssafy.meongnyang.api.response.LostResponseDto;
import com.ssafy.meongnyang.api.response.UserDetailResponseDto;
import com.ssafy.meongnyang.common.exception.handler.CustomNotFoundException;
import com.ssafy.meongnyang.db.entity.Lost;
import com.ssafy.meongnyang.db.entity.User;
import com.ssafy.meongnyang.db.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class UserServiceImpl implements UserService {
    private final UserRepository userRepository;

    @Override
    public UserDetailResponseDto writeUser(UserRegisterDto userRegisterDto) {
        User user = User.builder()
                .name(userRegisterDto.getName())
                .nickname(userRegisterDto.getNickname())
                .email(userRegisterDto.getEmail())
                .profile_img(userRegisterDto.getProfile_img()).build();
        User userResponse = userRepository.save(user);

        UserDetailResponseDto userDetailResponseDto = UserDetailResponseDto.builder()
                .id(userResponse.getId())
                .name(userResponse.getName())
                .nickname(userResponse.getNickname())
                .email(userResponse.getEmail())
                .profile_img(userResponse.getProfile_img())
                .join_date(userResponse.getJoin_date()).build();
        return userDetailResponseDto;
    }

    @Override
    public UserDetailResponseDto updateUser(UserUpdateDto userUpdateDto) {
        User user = userRepository.findById(userUpdateDto.getId()).orElseThrow(CustomNotFoundException::new);

        User updated = User.builder()
                .id(user.getId())
                .name(userUpdateDto.getName())
                .email(userUpdateDto.getEmail())
                .nickname(userUpdateDto.getNickname())
                .profile_img(userUpdateDto.getProfile_img())
                .join_date(user.getJoin_date())
                .commentList(user.getCommentList())
                .diagnoseList(user.getDiagnoseList())
                .showPetList(user.getShowPetList())
                .build();

        User userResponse = userRepository.save(updated);

        UserDetailResponseDto userDetailResponseDto = UserDetailResponseDto.builder()
                .id(userResponse.getId())
                .name(userResponse.getName())
                .email(userResponse.getEmail())
                .nickname(userResponse.getNickname())
                .profile_img(userResponse.getProfile_img())
                .join_date(userResponse.getJoin_date())
                .build();
        return userDetailResponseDto;
    }

    @Override
    public UserDetailResponseDto getUserDetail(long id) {
        User user = userRepository.findById(id).orElseThrow(CustomNotFoundException::new);
        UserDetailResponseDto userDetailResponseDto = UserDetailResponseDto.builder()
                .id(user.getId())
                .name(user.getName())
                .nickname(user.getNickname())
                .email(user.getEmail())
                .profile_img(user.getProfile_img()).build();
        return userDetailResponseDto;
    }

    @Override
    public boolean deleteUser(long id) {
        userRepository.findById(id).orElseThrow(CustomNotFoundException::new);
        userRepository.deleteById(id);
        return true;
    }
}
