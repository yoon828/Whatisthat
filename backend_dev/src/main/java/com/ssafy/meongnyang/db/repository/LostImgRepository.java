package com.ssafy.meongnyang.db.repository;

import com.ssafy.meongnyang.db.entity.LostImg;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface LostImgRepository extends JpaRepository<LostImg, Long> {
}
