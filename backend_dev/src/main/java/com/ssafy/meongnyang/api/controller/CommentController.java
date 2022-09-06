package com.ssafy.meongnyang.api.controller;

import com.ssafy.meongnyang.api.request.CommentRegisterDto;
import com.ssafy.meongnyang.api.request.CommentUpdateDto;
import com.ssafy.meongnyang.api.service.CommentService;
import com.ssafy.meongnyang.common.model.Response;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RequiredArgsConstructor
@RestController
@RequestMapping("/api/show-pet/comment")
public class CommentController {
    private final CommentService commentService;

    @PostMapping
    public ResponseEntity<?> writeComment(@RequestBody CommentRegisterDto commentRegisterDto) {
        return new ResponseEntity<>(new Response<>(true, 201, "댓글 등록 성공", commentService.writeComment(commentRegisterDto)), HttpStatus.CREATED);
    }

    @PutMapping
    public ResponseEntity<?> updateComment(@RequestBody CommentUpdateDto commentUpdateDto) {
        return new ResponseEntity<>(new Response<>(true, 202, "댓글 수정 성공", commentService.updateComment(commentUpdateDto)), HttpStatus.ACCEPTED);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<?> deleteComment(@PathVariable int id) {
        return new ResponseEntity<>(new Response<>(true, 200, "댓글 삭제 성공", commentService.deleteComment(id)), HttpStatus.OK);
    }

    @GetMapping("/list/{id}")
    public ResponseEntity<?> getCommentList(@PathVariable int id) {
        return new ResponseEntity<>(new Response<>(true, 200, "댓글 목록 조회 성공", commentService.getCommentList(id)), HttpStatus.OK);
    }
}
