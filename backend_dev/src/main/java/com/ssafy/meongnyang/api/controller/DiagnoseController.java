package com.ssafy.meongnyang.api.controller;

import com.ssafy.meongnyang.api.request.DiagnoseRegisterDto;
import com.ssafy.meongnyang.api.service.DiagnoseService;
import com.ssafy.meongnyang.common.model.Response;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RequiredArgsConstructor
@RestController
@RequestMapping("/api/diagnose")
public class DiagnoseController {

    private final DiagnoseService diagnoseService;

    @PostMapping
    public ResponseEntity<?> writeDiagnose(@RequestBody DiagnoseRegisterDto diagnoseRegisterDto) {
        return new ResponseEntity<>(new Response<>(true, 201, "진단 내역 등록 성공", diagnoseService.writeDiagnose(diagnoseRegisterDto)), HttpStatus.CREATED);
    }

    @GetMapping("/{id}")
    public ResponseEntity<?> getDiagnose(@PathVariable int id) {
        return new ResponseEntity<>(new Response<>(true, 200, "진단 내역 상세 조회 성공", diagnoseService.getDiagnose(id)), HttpStatus.OK);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> deleteShowPet(@PathVariable int id) {
        return new ResponseEntity<>(new Response<>(true, 200, "진단 내역 삭제 성공", diagnoseService.deleteDiagnose(id)), HttpStatus.OK);
    }

    // 토큰 만들기 전 임시로 id값 넘겨주기
    @GetMapping("/list/{id}")
    public ResponseEntity<?> getDiagnoseList(@PathVariable int id) {
        return new ResponseEntity<>(new Response<>(true, 200, "회원별 진단 내역 목록 조회 성공", diagnoseService.getDiagnoseList(id)), HttpStatus.OK);
    }
}
