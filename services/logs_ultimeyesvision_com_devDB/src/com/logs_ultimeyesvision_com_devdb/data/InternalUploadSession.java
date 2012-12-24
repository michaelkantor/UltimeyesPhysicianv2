
package com.logs_ultimeyesvision_com_devdb.data;

import java.util.Date;
import java.util.HashSet;
import java.util.Set;


/**
 *  logs_ultimeyesvision_com_devDB.InternalUploadSession
 *  11/15/2012 09:16:38
 * 
 */
public class InternalUploadSession {

    private Integer id;
    private String internalSessionKey;
    private String license;
    private Date internalSessionTimestamp;
    private Set<com.logs_ultimeyesvision_com_devdb.data.InternalUploadSessionFile> internalUploadSessionFiles = new HashSet<com.logs_ultimeyesvision_com_devdb.data.InternalUploadSessionFile>();
    private Set<com.logs_ultimeyesvision_com_devdb.data.UltimeyesLogDynamic> ultimeyesLogDynamics = new HashSet<com.logs_ultimeyesvision_com_devdb.data.UltimeyesLogDynamic>();
    private Set<com.logs_ultimeyesvision_com_devdb.data.UltimeyesLogSummary> ultimeyesLogSummaries = new HashSet<com.logs_ultimeyesvision_com_devdb.data.UltimeyesLogSummary>();
    private Set<com.logs_ultimeyesvision_com_devdb.data.UltimeyesLogStatic> ultimeyesLogStatics = new HashSet<com.logs_ultimeyesvision_com_devdb.data.UltimeyesLogStatic>();
    private Set<com.logs_ultimeyesvision_com_devdb.data.UltimeyesLogCalibration> ultimeyesLogCalibrations = new HashSet<com.logs_ultimeyesvision_com_devdb.data.UltimeyesLogCalibration>();

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getInternalSessionKey() {
        return internalSessionKey;
    }

    public void setInternalSessionKey(String internalSessionKey) {
        this.internalSessionKey = internalSessionKey;
    }

    public String getLicense() {
        return license;
    }

    public void setLicense(String license) {
        this.license = license;
    }

    public Date getInternalSessionTimestamp() {
        return internalSessionTimestamp;
    }

    public void setInternalSessionTimestamp(Date internalSessionTimestamp) {
        this.internalSessionTimestamp = internalSessionTimestamp;
    }

    public Set<com.logs_ultimeyesvision_com_devdb.data.InternalUploadSessionFile> getInternalUploadSessionFiles() {
        return internalUploadSessionFiles;
    }

    public void setInternalUploadSessionFiles(Set<com.logs_ultimeyesvision_com_devdb.data.InternalUploadSessionFile> internalUploadSessionFiles) {
        this.internalUploadSessionFiles = internalUploadSessionFiles;
    }

    public Set<com.logs_ultimeyesvision_com_devdb.data.UltimeyesLogDynamic> getUltimeyesLogDynamics() {
        return ultimeyesLogDynamics;
    }

    public void setUltimeyesLogDynamics(Set<com.logs_ultimeyesvision_com_devdb.data.UltimeyesLogDynamic> ultimeyesLogDynamics) {
        this.ultimeyesLogDynamics = ultimeyesLogDynamics;
    }

    public Set<com.logs_ultimeyesvision_com_devdb.data.UltimeyesLogSummary> getUltimeyesLogSummaries() {
        return ultimeyesLogSummaries;
    }

    public void setUltimeyesLogSummaries(Set<com.logs_ultimeyesvision_com_devdb.data.UltimeyesLogSummary> ultimeyesLogSummaries) {
        this.ultimeyesLogSummaries = ultimeyesLogSummaries;
    }

    public Set<com.logs_ultimeyesvision_com_devdb.data.UltimeyesLogStatic> getUltimeyesLogStatics() {
        return ultimeyesLogStatics;
    }

    public void setUltimeyesLogStatics(Set<com.logs_ultimeyesvision_com_devdb.data.UltimeyesLogStatic> ultimeyesLogStatics) {
        this.ultimeyesLogStatics = ultimeyesLogStatics;
    }

    public Set<com.logs_ultimeyesvision_com_devdb.data.UltimeyesLogCalibration> getUltimeyesLogCalibrations() {
        return ultimeyesLogCalibrations;
    }

    public void setUltimeyesLogCalibrations(Set<com.logs_ultimeyesvision_com_devdb.data.UltimeyesLogCalibration> ultimeyesLogCalibrations) {
        this.ultimeyesLogCalibrations = ultimeyesLogCalibrations;
    }

}
