
package com.logs_ultimeyesvision_com_devdb.data;

import java.io.Serializable;


/**
 *  logs_ultimeyesvision_com_devDB.ViewSeatsUsedPerLicenseId
 *  11/15/2012 09:16:38
 * 
 */
public class ViewSeatsUsedPerLicenseId
    implements Serializable
{

    private Integer licenseId;
    private String key;
    private Long seatsUsedPerLicense;
    private Short leasePeriod;
    private Integer seatsAllocatedPerLicense;
    private Integer resellerId;
    private String resellerName;
    private Integer seatsAllocatedPerReseller;

    public boolean equals(Object o) {
        if (o == this) {
            return true;
        }
        if (!(o instanceof ViewSeatsUsedPerLicenseId)) {
            return false;
        }
        ViewSeatsUsedPerLicenseId other = ((ViewSeatsUsedPerLicenseId) o);
        if (this.licenseId == null) {
            if (other.licenseId!= null) {
                return false;
            }
        } else {
            if (!this.licenseId.equals(other.licenseId)) {
                return false;
            }
        }
        if (this.key == null) {
            if (other.key!= null) {
                return false;
            }
        } else {
            if (!this.key.equals(other.key)) {
                return false;
            }
        }
        if (this.seatsUsedPerLicense == null) {
            if (other.seatsUsedPerLicense!= null) {
                return false;
            }
        } else {
            if (!this.seatsUsedPerLicense.equals(other.seatsUsedPerLicense)) {
                return false;
            }
        }
        if (this.leasePeriod == null) {
            if (other.leasePeriod!= null) {
                return false;
            }
        } else {
            if (!this.leasePeriod.equals(other.leasePeriod)) {
                return false;
            }
        }
        if (this.seatsAllocatedPerLicense == null) {
            if (other.seatsAllocatedPerLicense!= null) {
                return false;
            }
        } else {
            if (!this.seatsAllocatedPerLicense.equals(other.seatsAllocatedPerLicense)) {
                return false;
            }
        }
        if (this.resellerId == null) {
            if (other.resellerId!= null) {
                return false;
            }
        } else {
            if (!this.resellerId.equals(other.resellerId)) {
                return false;
            }
        }
        if (this.resellerName == null) {
            if (other.resellerName!= null) {
                return false;
            }
        } else {
            if (!this.resellerName.equals(other.resellerName)) {
                return false;
            }
        }
        if (this.seatsAllocatedPerReseller == null) {
            if (other.seatsAllocatedPerReseller!= null) {
                return false;
            }
        } else {
            if (!this.seatsAllocatedPerReseller.equals(other.seatsAllocatedPerReseller)) {
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
        if (this.key!= null) {
            rtn = (rtn + this.key.hashCode());
        }
        rtn = (rtn* 37);
        if (this.seatsUsedPerLicense!= null) {
            rtn = (rtn + this.seatsUsedPerLicense.hashCode());
        }
        rtn = (rtn* 37);
        if (this.leasePeriod!= null) {
            rtn = (rtn + this.leasePeriod.hashCode());
        }
        rtn = (rtn* 37);
        if (this.seatsAllocatedPerLicense!= null) {
            rtn = (rtn + this.seatsAllocatedPerLicense.hashCode());
        }
        rtn = (rtn* 37);
        if (this.resellerId!= null) {
            rtn = (rtn + this.resellerId.hashCode());
        }
        rtn = (rtn* 37);
        if (this.resellerName!= null) {
            rtn = (rtn + this.resellerName.hashCode());
        }
        rtn = (rtn* 37);
        if (this.seatsAllocatedPerReseller!= null) {
            rtn = (rtn + this.seatsAllocatedPerReseller.hashCode());
        }
        return rtn;
    }

    public Integer getLicenseId() {
        return licenseId;
    }

    public void setLicenseId(Integer licenseId) {
        this.licenseId = licenseId;
    }

    public String getKey() {
        return key;
    }

    public void setKey(String key) {
        this.key = key;
    }

    public Long getSeatsUsedPerLicense() {
        return seatsUsedPerLicense;
    }

    public void setSeatsUsedPerLicense(Long seatsUsedPerLicense) {
        this.seatsUsedPerLicense = seatsUsedPerLicense;
    }

    public Short getLeasePeriod() {
        return leasePeriod;
    }

    public void setLeasePeriod(Short leasePeriod) {
        this.leasePeriod = leasePeriod;
    }

    public Integer getSeatsAllocatedPerLicense() {
        return seatsAllocatedPerLicense;
    }

    public void setSeatsAllocatedPerLicense(Integer seatsAllocatedPerLicense) {
        this.seatsAllocatedPerLicense = seatsAllocatedPerLicense;
    }

    public Integer getResellerId() {
        return resellerId;
    }

    public void setResellerId(Integer resellerId) {
        this.resellerId = resellerId;
    }

    public String getResellerName() {
        return resellerName;
    }

    public void setResellerName(String resellerName) {
        this.resellerName = resellerName;
    }

    public Integer getSeatsAllocatedPerReseller() {
        return seatsAllocatedPerReseller;
    }

    public void setSeatsAllocatedPerReseller(Integer seatsAllocatedPerReseller) {
        this.seatsAllocatedPerReseller = seatsAllocatedPerReseller;
    }

}
