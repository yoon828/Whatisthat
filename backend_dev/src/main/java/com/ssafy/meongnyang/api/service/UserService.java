package com.ssafy.meongnyang.api.service;

import com.ssafy.meongnyang.api.request.UserRegisterDto;
import com.ssafy.meongnyang.api.request.UserUpdateDto;
import com.ssafy.meongnyang.api.response.UserDetailResponseDto;
import com.ssafy.meongnyang.api.response.UserResponseDto;
import org.springframework.stereotype.Service;

@Service
public interface UserService {
    UserResponseDto writeUser(UserRegisterDto userRegisterDto);
    UserResponseDto updateUser(UserUpdateDto userUpdateDto);
    UserDetailResponseDto getUserDetail(Long id);
    boolean deleteUser(Long id);
}
