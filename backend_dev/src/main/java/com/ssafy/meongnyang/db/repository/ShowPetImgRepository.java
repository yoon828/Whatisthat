package com.ssafy.meongnyang.db.repository;

import com.ssafy.meongnyang.db.entity.ShowPetImg;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ShowPetImgRepository extends JpaRepository<ShowPetImg, Long> {
}
