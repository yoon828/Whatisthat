package com.ssafy.meongnyang.api.controller;

import com.ssafy.meongnyang.api.request.LostRegisterDto;
import com.ssafy.meongnyang.api.request.LostUpdateDto;
import com.ssafy.meongnyang.api.service.LostService;
import com.ssafy.meongnyang.common.model.Response;
import io.swagger.annotations.ApiOperation;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RequiredArgsConstructor
@RestController
@RequestMapping("/api/lost")
public class LostController {

    private final LostService lostService;

//    @PostMapping
//    @ApiOperation(value = "실종 글 등록", notes = "실종 글을 등록한다.")
//    public ResponseEntity<?> writeLost(@RequestBody LostRegisterDto lostRegisterDto) {
//        return new ResponseEntity<>(new Response<>(true, 201, "실종 글 등록 성공",
//                lostService.writeLost(lostRegisterDto)), HttpStatus.CREATED);
//    }
    @ResponseStatus(HttpStatus.CREATED)
    @PostMapping
    @ApiOperation(value = "실종 글 등록", notes = "실종 글을 등록한다.")
    public Response<?> writeLost(@RequestHeader("authorization") String authorization, @RequestBody LostRegisterDto lostRegisterDto) {
        return new Response<>(true, 201, "실종 글 등록 성공",
                lostService.writeLost(authorization.replace("Bearer ", ""), lostRegisterDto));
    }

    @ResponseStatus(HttpStatus.OK)
    @GetMapping("/list")
    @ApiOperation(value = "실종 글 목록 조회", notes = "등록된 모든 실종 글 목록을 반환한다.")
    public Response<?> getLostList() {
        return new Response<>(true, 200, "실종 글 목록 조회 성공",
                lostService.getLostList());
    }

//    @PutMapping
//    @ApiOperation(value = "실종 글 수정", notes = "실종 글을 수정한다.")
//    public ResponseEntity<?> updateLost(@RequestBody LostUpdateDto lostUpdateDto) {
//        return new ResponseEntity<>(new Response<>(true, 202, "실종 글 수정 성공",
//                lostService.updateLost(lostUpdateDto)), HttpStatus.ACCEPTED);
//    }
    @ResponseStatus(HttpStatus.ACCEPTED)
    @PutMapping
    @ApiOperation(value = "실종 글 수정", notes = "실종 글을 수정한다.")
    public Response<?> updateLost(@RequestBody LostUpdateDto lostUpdateDto) {
        return new Response<>(true, 202, "실종 글 수정 성공",
                lostService.updateLost(lostUpdateDto));
    }

//    @DeleteMapping("/{id}")
//    @ApiOperation(value = "실종 글 삭제", notes = "id에 해당하는 실종 글을 삭제한다.")
//    public ResponseEntity<?> deleteLost(@PathVariable long id) {
//        return new ResponseEntity<>(new Response<>(true, 200, "실종 글 삭제 성공",
//                lostService.deleteLost(id)), HttpStatus.OK);
//    }
    @ResponseStatus(HttpStatus.OK)
    @DeleteMapping("/{id}")
    @ApiOperation(value = "실종 글 삭제", notes = "id에 해당하는 실종 글을 삭제한다.")
    public Response<?> deleteLost(@PathVariable long id) {
        return new Response<>(true, 200, "실종 글 삭제 성공",
                lostService.deleteLost(id));
    }

    // 토큰 만들기 전 임시로 id값 넘겨주기
    @GetMapping("/articles")
    @ApiOperation(value = "회원별 실종 글 목록 조회", notes = "해당하는 회원의 실종 글 목록을 반환한다.")
    public Response<?> getUserLostList(@RequestHeader("authorization") String authorization) {
        return new Response<>(true, 200, "회원별 실종 글 목록 조회 성공",
                lostService.getUserLostList(authorization.replace("Bearer ", "")));
    }
}


