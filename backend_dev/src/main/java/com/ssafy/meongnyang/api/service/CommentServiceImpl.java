package com.ssafy.meongnyang.api.service;

import com.ssafy.meongnyang.api.request.CommentRegisterDto;
import com.ssafy.meongnyang.api.request.CommentUpdateDto;
import com.ssafy.meongnyang.api.response.CommentResponseDto;
import com.ssafy.meongnyang.common.exception.handler.CustomNotFoundException;
import com.ssafy.meongnyang.db.entity.Comment;
import com.ssafy.meongnyang.db.entity.ShowPet;
import com.ssafy.meongnyang.db.entity.User;
import com.ssafy.meongnyang.db.repository.CommentRepository;
import com.ssafy.meongnyang.db.repository.ShowPetRepository;
import com.ssafy.meongnyang.db.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class CommentServiceImpl implements CommentService {

    private final UserRepository userRepository;
    private final CommentRepository commentRepository;
    private final ShowPetRepository showPetRepository;

    @Override
    public CommentResponseDto writeComment(CommentRegisterDto commentRegisterDto) {
        ShowPet showPet = showPetRepository.findById(commentRegisterDto.getId()).orElseThrow(CustomNotFoundException::new);
        User user = userRepository.findById(commentRegisterDto.getUser_id()).orElseThrow(CustomNotFoundException::new);

        Comment comment = Comment.builder()
                .content(commentRegisterDto.getContent())
                .showpet(showPet)
                .user(user)
                .build();

        Comment commentResponse = commentRepository.save(comment);

        CommentResponseDto commentResponseDto = CommentResponseDto.builder()
                .id(commentResponse.getId())
                .user_id(commentResponse.getUser().getId())
                .content(commentResponse.getContent())
                .date(commentResponse.getDate()).build();
        return commentResponseDto;
    }

    @Override
    public CommentResponseDto updateComment(CommentUpdateDto commentUpdateDto) {
        Comment comment = commentRepository.findById(commentUpdateDto.getId()).orElseThrow(CustomNotFoundException::new);

        Comment updated = Comment.builder()
                .id(comment.getId())
                .content(commentUpdateDto.getContent())
                .showpet(comment.getShowpet())
                .user(comment.getUser())
                .build();

        Comment commentResponse = commentRepository.save(updated);

        CommentResponseDto commentResponseDto = CommentResponseDto.builder()
                .id(commentResponse.getId())
                .user_id(commentResponse.getUser().getId())
                .content(commentResponse.getContent())
                .date(commentResponse.getDate()).build();
        return commentResponseDto;
    }

    @Override
    public List<CommentResponseDto> getCommentList(long id) {
        ShowPet showPet = showPetRepository.findById(id).orElseThrow(CustomNotFoundException::new);

        List<CommentResponseDto> list = showPet.getCommentList().stream().map(comment -> CommentResponseDto.builder()
                .id(comment.getId())
                .content(comment.getContent())
                .user_id(comment.getUser().getId())
                .date(comment.getDate()).build())
                .collect(Collectors.toList());

        return list;
    }

    @Override
    public boolean deleteComment(long id) {
        commentRepository.findById(id).orElseThrow(CustomNotFoundException::new);
        commentRepository.deleteById(id);
        return true;
    }
}
