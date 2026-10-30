package com.thehalfplate.backend.repository;

import com.thehalfplate.backend.entity.MomentEntity;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.UUID;

public interface MomentRepository extends JpaRepository<MomentEntity, UUID> {

    List<MomentEntity> findAllByOrderByCreatedAtDesc();
}
