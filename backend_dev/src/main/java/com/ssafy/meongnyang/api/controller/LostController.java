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

    @PostMapping
    @ApiOperation(value = "실종 글 등록", notes = "실종 글을 등록한다.")
    public ResponseEntity<?> writeLost(@RequestBody LostRegisterDto lostRegisterDto) {
        return new ResponseEntity<>(new Response<>(true, 201, "실종 글 등록 성공",
                lostService.writeLost(lostRegisterDto)), HttpStatus.CREATED);
    }

    @GetMapping("/list")
    @ApiOperation(value = "실종 글 목록 조회", notes = "등록된 모든 실종 글 목록을 반환한다.")
    public ResponseEntity<?> getLostList() {
        return new ResponseEntity<>(new Response<>(true, 200, "실종 글 목록 조회 성공",
                lostService.getLostList()), HttpStatus.OK);
    }

    @PutMapping
    @ApiOperation(value = "실종 글 수정", notes = "실종 글을 수정한다.")
    public ResponseEntity<?> updateLost(@RequestBody LostUpdateDto lostUpdateDto) {
        return new ResponseEntity<>(new Response<>(true, 202, "실종 글 수정 성공",
                lostService.updateLost(lostUpdateDto)), HttpStatus.ACCEPTED);
    }

    @DeleteMapping("/{id}")
    @ApiOperation(value = "실종 글 삭제", notes = "id에 해당하는 실종 글을 삭제한다.")
    public ResponseEntity<?> deleteLost(@PathVariable long id) {
        return new ResponseEntity<>(new Response<>(true, 200, "실종 글 삭제 성공",
                lostService.deleteLost(id)), HttpStatus.OK);
    }

    // 토큰 만들기 전 임시로 id값 넘겨주기
    @GetMapping("/articles/{id}")
    @ApiOperation(value = "회원별 실종 글 목록 조회", notes = "id에 해당하는 회원의 실종 글 목록을 반환한다.")
    public ResponseEntity<?> getUserLostList(@PathVariable long id) {
        return new ResponseEntity<>(new Response<>(true, 200, "회원별 실종 글 목록 조회 성공",
                lostService.getUserLostList(id)), HttpStatus.OK);
    }
}
