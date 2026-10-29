package com.thehalfplate.backend.model;

/**
 * A moment's raw photo bytes, as served by the dedicated photo endpoint.
 *
 * @param contentType the photo's MIME type, e.g. "image/jpeg"
 * @param data the photo's bytes
 */
public record MomentPhoto(String contentType, byte[] data) {
}
