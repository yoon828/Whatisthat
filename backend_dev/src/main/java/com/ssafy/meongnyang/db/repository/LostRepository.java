package com.ssafy.meongnyang.db.repository;

import com.ssafy.meongnyang.api.response.LostResponseDto;
import com.ssafy.meongnyang.db.entity.Lost;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface LostRepository extends JpaRepository<Lost, Long> {
    @Query("select l from Lost l where l.id =:id order by l.date desc")
    List<Lost> findAllById(Long id);
}
