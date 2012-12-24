
package com.logs_ultimeyesvision_com_devdb.data;

import java.util.Date;


/**
 *  logs_ultimeyesvision_com_devDB.UltimeyesLogCalibration
 *  11/15/2012 09:16:38
 * 
 */
public class UltimeyesLogCalibration {

    private Integer id;
    private Customer customer;
    private InternalUploadSession internalUploadSession;
    private InternalUploadSessionFile internalUploadSessionFile;
    private Date dateTaken;
    private Integer sessionNumber;
    private Integer atStart;
    private Integer screen;
    private Integer gaborCount;
    private Float sf;
    private Float contrast;
    private Float locationX;
    private Float locationY;
    private Integer clicked;
    private Date createdAt;
    private Date updatedAt;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public Customer getCustomer() {
        return customer;
    }

    public void setCustomer(Customer customer) {
        this.customer = customer;
    }

    public InternalUploadSession getInternalUploadSession() {
        return internalUploadSession;
    }

    public void setInternalUploadSession(InternalUploadSession internalUploadSession) {
        this.internalUploadSession = internalUploadSession;
    }

    public InternalUploadSessionFile getInternalUploadSessionFile() {
        return internalUploadSessionFile;
    }

    public void setInternalUploadSessionFile(InternalUploadSessionFile internalUploadSessionFile) {
        this.internalUploadSessionFile = internalUploadSessionFile;
    }

    public Date getDateTaken() {
        return dateTaken;
    }

    public void setDateTaken(Date dateTaken) {
        this.dateTaken = dateTaken;
    }

    public Integer getSessionNumber() {
        return sessionNumber;
    }

    public void setSessionNumber(Integer sessionNumber) {
        this.sessionNumber = sessionNumber;
    }

    public Integer getAtStart() {
        return atStart;
    }

    public void setAtStart(Integer atStart) {
        this.atStart = atStart;
    }

    public Integer getScreen() {
        return screen;
    }

    public void setScreen(Integer screen) {
        this.screen = screen;
    }

    public Integer getGaborCount() {
        return gaborCount;
    }

    public void setGaborCount(Integer gaborCount) {
        this.gaborCount = gaborCount;
    }

    public Float getSf() {
        return sf;
    }

    public void setSf(Float sf) {
        this.sf = sf;
    }

    public Float getContrast() {
        return contrast;
    }

    public void setContrast(Float contrast) {
        this.contrast = contrast;
    }

    public Float getLocationX() {
        return locationX;
    }

    public void setLocationX(Float locationX) {
        this.locationX = locationX;
    }

    public Float getLocationY() {
        return locationY;
    }

    public void setLocationY(Float locationY) {
        this.locationY = locationY;
    }

    public Integer getClicked() {
        return clicked;
    }

    public void setClicked(Integer clicked) {
        this.clicked = clicked;
    }

    public Date getCreatedAt() {
        return createdAt;
    }

    public void setCreatedAt(Date createdAt) {
        this.createdAt = createdAt;
    }

    public Date getUpdatedAt() {
        return updatedAt;
    }

    public void setUpdatedAt(Date updatedAt) {
        this.updatedAt = updatedAt;
    }

}
