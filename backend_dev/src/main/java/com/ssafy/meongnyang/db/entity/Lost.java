package com.ssafy.meongnyang.db.entity;

import com.sun.org.apache.xpath.internal.operations.Bool;
import lombok.*;

import javax.persistence.*;
import java.sql.Timestamp;
import java.util.ArrayList;
import java.util.List;

@Entity
@Getter
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@AllArgsConstructor
@Builder
public class Lost {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "lost_id")
    private Long id;

    @Column(nullable = false)
    private String title;

    @Column(nullable = false)
    private Integer gender;

    @Column(nullable = false)
    private String phone;

    @Column(nullable = false)
    private Boolean is_found;

    @Column(nullable = false)
    private String name;

    @Column(nullable = false)
    private Timestamp date;

    @Column
    private String lost_date;

    @Column
    private String age;

    @Column
    private String weight;

    @Column
    private String kind;

    @Column
    private String place;

    @Column
    private String pay;

    @Column
    private String etc;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "user_id")
    private User user;

    @OneToMany(mappedBy = "lost", cascade = CascadeType.ALL)
    private List<LostImg> lostImgList = new ArrayList<>();
}
