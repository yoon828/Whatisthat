package com.ssafy.meongnyang.api.controller;

import com.ssafy.meongnyang.api.request.UserRegisterDto;
import com.ssafy.meongnyang.api.request.UserUpdateDto;
import com.ssafy.meongnyang.api.service.UserService;
import com.ssafy.meongnyang.common.model.Response;
import io.swagger.annotations.ApiOperation;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RequiredArgsConstructor
@RestController
@RequestMapping("/api/user")
public class UserController {

    private final UserService userService;

//    @PostMapping
//    @ApiOperation(value = "회원가입", notes = "사용자 정보를 등록한다.")
//    public ResponseEntity<?> writeUser(@RequestBody UserRegisterDto userRegisterDto) {
//        return new ResponseEntity<>(new Response<>(true, 201, "회원가입 성공",
//                userService.writeUser(userRegisterDto)), HttpStatus.CREATED);
//    }

//    @GetMapping("/{id}")
//    @ApiOperation(value = "회원정보 조회", notes = "해당 id의 회원 정보를 조회한다.")
//    public ResponseEntity<?> getUserDetail(@PathVariable long id) {
//        return new ResponseEntity<>(new Response<>(true, 200, "회원정보 조회 성공",
//                userService.getUserDetail(id)), HttpStatus.OK);
//    }
    @ResponseStatus(HttpStatus.OK)
    @GetMapping
    @ApiOperation(value = "회원정보 조회", notes = "회원 정보를 조회한다.")
    public Response<?> getUserDetail(@RequestHeader("authorization") String authorization) {
        return new Response<>(true, 200, "회원 정보 조회 성공", userService.getUserDetail(authorization.replace("Bearer ", "")));
    }

//    @PutMapping
//    @ApiOperation(value = "회원정보 수정", notes = "회원 정보를 수정한다.")
//    public ResponseEntity<?> updateUser(@RequestBody UserUpdateDto userUpdateDto) {
//        return new ResponseEntity<>(new Response<>(true, 202, "회원정보 수정 성공",
//                userService.updateUser(userUpdateDto)), HttpStatus.ACCEPTED);
//    }
    @ResponseStatus(HttpStatus.ACCEPTED)
    @PutMapping
    @ApiOperation(value = "회원정보 수정", notes = "회원 정보를 수정한다.")
    public Response<?> updateUser(@RequestBody UserUpdateDto userUpdateDto) {
        return new Response<>(true, 202, "회원 정보 수정 성공", userService.updateUser((userUpdateDto)));
    }

    @ResponseStatus(HttpStatus.OK)
    @DeleteMapping
    @ApiOperation(value = "회원탈퇴", notes = "해당 회원 정보를 삭제한다.")
    public Response<?> deleteUser(@RequestHeader("authorization") String authorization) {
        return new Response<>(true, 200, "회원 탈퇴 성공", userService.deleteUser(authorization.replace("Bearer ", "")));
    }

//    @DeleteMapping("/{id}")
//    @ApiOperation(value = "회원탈퇴", notes = "해당 id의 회원 정보를 삭제한다.")
//    public ResponseEntity<?> deleteUser(@PathVariable long id) {
//        return new ResponseEntity<>(new Response<>(true, 200, "회원 탈퇴 성공",
//                userService.deleteUser(id)), HttpStatus.OK);
//    }
}
