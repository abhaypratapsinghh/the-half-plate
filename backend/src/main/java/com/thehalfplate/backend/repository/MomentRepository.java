package com.thehalfplate.backend.repository;

import com.thehalfplate.backend.entity.MomentEntity;
import com.thehalfplate.backend.model.MomentCategory;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.UUID;

public interface MomentRepository extends JpaRepository<MomentEntity, UUID> {

    List<MomentEntity> findAllByOrderByCreatedAtDesc();

    List<MomentEntity> findByCategoryOrderByCreatedAtDesc(MomentCategory category);
}
