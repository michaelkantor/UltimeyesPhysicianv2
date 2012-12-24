
package com.logs_ultimeyesvision_com_devdb.data;

import java.io.Serializable;
import java.util.Date;


/**
 *  logs_ultimeyesvision_com_devDB.LicenseMacId
 *  11/15/2012 09:16:38
 * 
 */
public class LicenseMacId
    implements Serializable
{

    private Integer licenseId;
    private Serializable macAddr;
    private Date createdAt;
    private Date updatedAt;

    public boolean equals(Object o) {
        if (o == this) {
            return true;
        }
        if (!(o instanceof LicenseMacId)) {
            return false;
        }
        LicenseMacId other = ((LicenseMacId) o);
        if (this.licenseId == null) {
            if (other.licenseId!= null) {
                return false;
            }
        } else {
            if (!this.licenseId.equals(other.licenseId)) {
                return false;
            }
        }
        if (this.macAddr == null) {
            if (other.macAddr!= null) {
                return false;
            }
        } else {
            if (!this.macAddr.equals(other.macAddr)) {
                return false;
            }
        }
        if (this.createdAt == null) {
            if (other.createdAt!= null) {
                return false;
            }
        } else {
            if (!this.createdAt.equals(other.createdAt)) {
                return false;
            }
        }
        if (this.updatedAt == null) {
            if (other.updatedAt!= null) {
                return false;
            }
        } else {
            if (!this.updatedAt.equals(other.updatedAt)) {
                return false;
            }
        }
        return true;
    }

    public int hashCode() {
        int rtn = 17;
        rtn = (rtn* 37);
        if (this.licenseId!= null) {
            rtn = (rtn + this.licenseId.hashCode());
        }
        rtn = (rtn* 37);
        if (this.macAddr!= null) {
            rtn = (rtn + this.macAddr.hashCode());
        }
        rtn = (rtn* 37);
        if (this.createdAt!= null) {
            rtn = (rtn + this.createdAt.hashCode());
        }
        rtn = (rtn* 37);
        if (this.updatedAt!= null) {
            rtn = (rtn + this.updatedAt.hashCode());
        }
        return rtn;
    }

    public Integer getLicenseId() {
        return licenseId;
    }

    public void setLicenseId(Integer licenseId) {
        this.licenseId = licenseId;
    }

    public Serializable getMacAddr() {
        return macAddr;
    }

    public void setMacAddr(Serializable macAddr) {
        this.macAddr = macAddr;
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
