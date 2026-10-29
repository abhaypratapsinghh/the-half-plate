package com.thehalfplate.backend.repository;

import com.thehalfplate.backend.entity.MomentPhotoEntity;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.UUID;

public interface MomentPhotoRepository extends JpaRepository<MomentPhotoEntity, UUID> {
}
