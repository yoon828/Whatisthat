package com.ssafy.meongnyang.api.controller;

import com.ssafy.meongnyang.api.request.UserRegisterDto;
import com.ssafy.meongnyang.api.request.UserUpdateDto;
import com.ssafy.meongnyang.api.service.UserService;
import com.ssafy.meongnyang.common.model.Response;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RequiredArgsConstructor
@RestController
@RequestMapping("/api/user")
public class UserController {

    private final UserService userService;

    @PostMapping
    public ResponseEntity<?> writeUser(@RequestBody UserRegisterDto userRegisterDto) {
        return new ResponseEntity<>(new Response<>(true, 201, "회원가입 성공",
                userService.writeUser(userRegisterDto)), HttpStatus.CREATED);
    }

    @GetMapping("/{id}")
    public ResponseEntity<?> getUserDetail(@PathVariable long id) {
        return new ResponseEntity<>(new Response<>(true, 200, "회원정보 조회 성공",
                userService.getUserDetail(id)), HttpStatus.OK);
    }

    @PutMapping
    public ResponseEntity<?> updateUser(@RequestBody UserUpdateDto userUpdateDto) {
        return new ResponseEntity<>(new Response<>(true, 202, "회원정보 수정 성공",
                userService.updateUser(userUpdateDto)), HttpStatus.ACCEPTED);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> deleteUser(@PathVariable long id) {
        return new ResponseEntity<>(new Response<>(true, 200, "회원 탈퇴 성공",
                userService.deleteUser(id)), HttpStatus.OK);
    }
}
