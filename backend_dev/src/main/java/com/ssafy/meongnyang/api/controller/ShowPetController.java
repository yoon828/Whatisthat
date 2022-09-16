package com.ssafy.meongnyang.api.controller;

import com.ssafy.meongnyang.api.request.ShowPetRegisterDto;
import com.ssafy.meongnyang.api.request.ShowPetUpdateDto;
import com.ssafy.meongnyang.api.service.ShowPetService;
import com.ssafy.meongnyang.common.model.Response;
import io.swagger.annotations.ApiOperation;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RequiredArgsConstructor
@RestController
@RequestMapping("/api/show-pet")
public class ShowPetController {

    private final ShowPetService showPetService;

    @PostMapping
    @ApiOperation(value = "반려동물 자랑 글 등록", notes = "반려동물 자랑 글을 등록한다.")
    public ResponseEntity<?> writeShowPet(@RequestBody ShowPetRegisterDto showPetRegisterDto) {
        return new ResponseEntity<>(new Response<>(true, 201, "자랑 글 등록 성공",
                showPetService.writeShowPet(showPetRegisterDto)), HttpStatus.CREATED);
    }

    @GetMapping("/list")
    @ApiOperation(value = "반려동물 자랑 글 목록 조회", notes = "등록된 모든 반려동물 자랑 글의 목록을 반환한다.")
    public ResponseEntity<?> getShowPetList() {
        return new ResponseEntity<>(new Response<>(true, 200, "자랑 글 목록 조회 성공",
                showPetService.getShowPetList()), HttpStatus.OK);
    }

    @GetMapping("/{id}")
    @ApiOperation(value = "반려동물 자랑 글 상세 조회", notes = "id에 해당하는 반려동물 자랑 글의 상세 정보를 반환한다.")
    public ResponseEntity<?> getShowPet(@PathVariable long id) {
        return new ResponseEntity<>(new Response<>(true, 200, "자랑 글 상세 조회 성공",
                showPetService.getShowPet(id)), HttpStatus.OK);
    }

    @PutMapping
    @ApiOperation(value = "반려동물 자랑 글 수정", notes = "반려동물 자랑 글을 수정한다.")
    public ResponseEntity<?> updateShowPet(@RequestBody ShowPetUpdateDto showPetUpdateDto) {
        return new ResponseEntity<>(new Response<>(true, 202, "자랑 글 수정 성공",
                showPetService.updateShowPet(showPetUpdateDto)), HttpStatus.ACCEPTED);
    }

    @DeleteMapping("/{id}")
    @ApiOperation(value = "반려동물 자랑 글 삭제", notes = "id에 해당하는 반려동물 자랑 글을 삭제한다.")
    public ResponseEntity<?> deleteShowPet(@PathVariable long id) {
        return new ResponseEntity<>(new Response<>(true, 200, "자랑 글 삭제 성공",
                showPetService.deleteShowPet(id)), HttpStatus.OK);
    }

    // 토큰 만들기 전 임시로 id값 넘겨주기
    @GetMapping("/articles/{id}")
    @ApiOperation(value = "회원별 반려동물 자랑 글 목록 조회", notes = "id에 해당하는 회원의 반려동물 자랑 글 목록을 반환한다.")
    public ResponseEntity<?> getUserShowPetList(@PathVariable long id) {
        return new ResponseEntity<>(new Response<>(true, 200, "회원별 자랑 글 목록 조회 성공",
                showPetService.getUserShowPetList(id)), HttpStatus.OK);
    }
}
