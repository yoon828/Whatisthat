package com.ssafy.meongnyang.api.service;

import com.ssafy.meongnyang.api.request.CommentRegisterDto;
import com.ssafy.meongnyang.api.request.CommentUpdateDto;
import com.ssafy.meongnyang.api.response.CommentResponseDto;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public interface CommentService {
    int writeComment(CommentRegisterDto commentRegisterDto);
    int updateComment(CommentUpdateDto commentUpdateDto);
    List<CommentResponseDto> getCommentList(int id);
    int deleteComment(int id);
}
