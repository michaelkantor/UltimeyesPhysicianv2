
package com.logs_ultimeyesvision_com_devdb.data;

import java.util.Date;
import java.util.HashSet;
import java.util.Set;


/**
 *  logs_ultimeyesvision_com_devDB.InternalUploadSessionFile
 *  11/15/2012 09:16:38
 * 
 */
public class InternalUploadSessionFile {

    private Integer id;
    private Customer customer;
    private InternalUploadSession internalUploadSession;
    private String username;
    private String filename;
    private Date createdAt;
    private Date updatedAt;
    private Integer iterationNumber;
    private Set<com.logs_ultimeyesvision_com_devdb.data.UltimeyesLogSummary> ultimeyesLogSummaries = new HashSet<com.logs_ultimeyesvision_com_devdb.data.UltimeyesLogSummary>();
    private Set<com.logs_ultimeyesvision_com_devdb.data.UltimeyesLogCalibration> ultimeyesLogCalibrations = new HashSet<com.logs_ultimeyesvision_com_devdb.data.UltimeyesLogCalibration>();
    private Set<com.logs_ultimeyesvision_com_devdb.data.UltimeyesLogStatic> ultimeyesLogStatics = new HashSet<com.logs_ultimeyesvision_com_devdb.data.UltimeyesLogStatic>();
    private Set<com.logs_ultimeyesvision_com_devdb.data.UltimeyesLogDynamic> ultimeyesLogDynamics = new HashSet<com.logs_ultimeyesvision_com_devdb.data.UltimeyesLogDynamic>();

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

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getFilename() {
        return filename;
    }

    public void setFilename(String filename) {
        this.filename = filename;
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

    public Integer getIterationNumber() {
        return iterationNumber;
    }

    public void setIterationNumber(Integer iterationNumber) {
        this.iterationNumber = iterationNumber;
    }

    public Set<com.logs_ultimeyesvision_com_devdb.data.UltimeyesLogSummary> getUltimeyesLogSummaries() {
        return ultimeyesLogSummaries;
    }

    public void setUltimeyesLogSummaries(Set<com.logs_ultimeyesvision_com_devdb.data.UltimeyesLogSummary> ultimeyesLogSummaries) {
        this.ultimeyesLogSummaries = ultimeyesLogSummaries;
    }

    public Set<com.logs_ultimeyesvision_com_devdb.data.UltimeyesLogCalibration> getUltimeyesLogCalibrations() {
        return ultimeyesLogCalibrations;
    }

    public void setUltimeyesLogCalibrations(Set<com.logs_ultimeyesvision_com_devdb.data.UltimeyesLogCalibration> ultimeyesLogCalibrations) {
        this.ultimeyesLogCalibrations = ultimeyesLogCalibrations;
    }

    public Set<com.logs_ultimeyesvision_com_devdb.data.UltimeyesLogStatic> getUltimeyesLogStatics() {
        return ultimeyesLogStatics;
    }

    public void setUltimeyesLogStatics(Set<com.logs_ultimeyesvision_com_devdb.data.UltimeyesLogStatic> ultimeyesLogStatics) {
        this.ultimeyesLogStatics = ultimeyesLogStatics;
    }

    public Set<com.logs_ultimeyesvision_com_devdb.data.UltimeyesLogDynamic> getUltimeyesLogDynamics() {
        return ultimeyesLogDynamics;
    }

    public void setUltimeyesLogDynamics(Set<com.logs_ultimeyesvision_com_devdb.data.UltimeyesLogDynamic> ultimeyesLogDynamics) {
        this.ultimeyesLogDynamics = ultimeyesLogDynamics;
    }

}
