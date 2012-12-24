
package com.logs_ultimeyesvision_com_devdb.data;

import java.io.Serializable;


/**
 *  logs_ultimeyesvision_com_devDB.ViewResellerCustomerProductAssociateId
 *  11/15/2012 09:16:38
 * 
 */
public class ViewResellerCustomerProductAssociateId
    implements Serializable
{

    private Integer customerId;
    private Integer licenseId;
    private Integer productId;
    private String username;
    private Integer resellerId;
    private String resellerName;
    private Integer seatsAllocatedPerReseller;

    public boolean equals(Object o) {
        if (o == this) {
            return true;
        }
        if (!(o instanceof ViewResellerCustomerProductAssociateId)) {
            return false;
        }
        ViewResellerCustomerProductAssociateId other = ((ViewResellerCustomerProductAssociateId) o);
        if (this.customerId == null) {
            if (other.customerId!= null) {
                return false;
            }
        } else {
            if (!this.customerId.equals(other.customerId)) {
                return false;
            }
        }
        if (this.licenseId == null) {
            if (other.licenseId!= null) {
                return false;
            }
        } else {
            if (!this.licenseId.equals(other.licenseId)) {
                return false;
            }
        }
        if (this.productId == null) {
            if (other.productId!= null) {
                return false;
            }
        } else {
            if (!this.productId.equals(other.productId)) {
                return false;
            }
        }
        if (this.username == null) {
            if (other.username!= null) {
                return false;
            }
        } else {
            if (!this.username.equals(other.username)) {
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
        if (this.customerId!= null) {
            rtn = (rtn + this.customerId.hashCode());
        }
        rtn = (rtn* 37);
        if (this.licenseId!= null) {
            rtn = (rtn + this.licenseId.hashCode());
        }
        rtn = (rtn* 37);
        if (this.productId!= null) {
            rtn = (rtn + this.productId.hashCode());
        }
        rtn = (rtn* 37);
        if (this.username!= null) {
            rtn = (rtn + this.username.hashCode());
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

    public Integer getCustomerId() {
        return customerId;
    }

    public void setCustomerId(Integer customerId) {
        this.customerId = customerId;
    }

    public Integer getLicenseId() {
        return licenseId;
    }

    public void setLicenseId(Integer licenseId) {
        this.licenseId = licenseId;
    }

    public Integer getProductId() {
        return productId;
    }

    public void setProductId(Integer productId) {
        this.productId = productId;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
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
