package com.ssafy.meongnyang.api.service;

import com.ssafy.meongnyang.api.request.UserRegisterDto;
import com.ssafy.meongnyang.api.request.UserUpdateDto;
import com.ssafy.meongnyang.api.response.UserDetailResponseDto;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface UserService {
    UserDetailResponseDto writeUser(UserRegisterDto userRegisterDto);
    UserDetailResponseDto updateUser(UserUpdateDto userUpdateDto);
    UserDetailResponseDto getUserDetail(long id);
    boolean deleteUser(long id);
}
