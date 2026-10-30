package com.thehalfplate.backend.service;

import com.thehalfplate.backend.model.Moment;
import com.thehalfplate.backend.model.MomentPhoto;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;

/** Supplies and accepts celebration photos shared by guests. */
public interface MomentService {

    List<Moment> getMoments();

    Moment addMoment(String caption, String submittedBy, MultipartFile photo);

    MomentPhoto getPhoto(String id);

    void deleteMoment(String id);
}
