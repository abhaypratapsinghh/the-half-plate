package com.thehalfplate.backend.service;

import com.thehalfplate.backend.model.Moment;
import com.thehalfplate.backend.model.MomentCategory;
import com.thehalfplate.backend.model.MomentPhoto;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;

/** Supplies and accepts celebration/happy-moment photos shared by guests. */
public interface MomentService {

    List<Moment> getMoments(MomentCategory category);

    Moment addMoment(MomentCategory category, String caption, String submittedBy, MultipartFile photo);

    MomentPhoto getPhoto(String id);
}
