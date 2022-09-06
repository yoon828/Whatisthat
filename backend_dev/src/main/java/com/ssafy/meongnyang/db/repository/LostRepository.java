package com.ssafy.meongnyang.db.repository;

import com.ssafy.meongnyang.db.entity.Lost;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface LostRepository extends JpaRepository<Lost, Integer> {
    Optional<Lost> findById(int id);
}
