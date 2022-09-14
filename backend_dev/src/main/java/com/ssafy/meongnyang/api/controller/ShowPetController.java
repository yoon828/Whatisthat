package com.ssafy.meongnyang.api.controller;

import com.ssafy.meongnyang.api.request.ShowPetRegisterDto;
import com.ssafy.meongnyang.api.request.ShowPetUpdateDto;
import com.ssafy.meongnyang.api.service.ShowPetService;
import com.ssafy.meongnyang.common.model.Response;
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
    public ResponseEntity<?> writeShowPet(@RequestBody ShowPetRegisterDto showPetRegisterDto) {
        return new ResponseEntity<>(new Response<>(true, 201, "자랑 글 등록 성공",
                showPetService.writeShowPet(showPetRegisterDto)), HttpStatus.CREATED);
    }

    @GetMapping("/list")
    public ResponseEntity<?> getShowPetList() {
        return new ResponseEntity<>(new Response<>(true, 200, "자랑 글 목록 조회 성공",
                showPetService.getShowPetList()), HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<?> getShowPet(@PathVariable long id) {
        return new ResponseEntity<>(new Response<>(true, 200, "자랑 글 상세 조회 성공",
                showPetService.getShowPet(id)), HttpStatus.OK);
    }

    @PutMapping
    public ResponseEntity<?> updateShowPet(@RequestBody ShowPetUpdateDto showPetUpdateDto) {
        return new ResponseEntity<>(new Response<>(true, 202, "자랑 글 수정 성공",
                showPetService.updateShowPet(showPetUpdateDto)), HttpStatus.ACCEPTED);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> deleteShowPet(@PathVariable long id) {
        return new ResponseEntity<>(new Response<>(true, 200, "자랑 글 삭제 성공",
                showPetService.deleteShowPet(id)), HttpStatus.OK);
    }

    // 토큰 만들기 전 임시로 id값 넘겨주기
    @GetMapping("/articles/{id}")
    public ResponseEntity<?> getUserShowPetList(@PathVariable long id) {
        return new ResponseEntity<>(new Response<>(true, 200, "회원별 자랑 글 목록 조회 성공",
                showPetService.getUserShowPetList(id)), HttpStatus.OK);
    }
}
