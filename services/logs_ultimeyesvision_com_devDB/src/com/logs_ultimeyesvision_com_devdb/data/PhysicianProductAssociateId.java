
package com.logs_ultimeyesvision_com_devdb.data;

import java.io.Serializable;
import java.util.Date;


/**
 *  logs_ultimeyesvision_com_devDB.PhysicianProductAssociateId
 *  11/15/2012 09:16:38
 * 
 */
public class PhysicianProductAssociateId
    implements Serializable
{

    private Integer physicianId;
    private Integer productId;
    private Date createdAt;
    private Date updatedAt;

    public boolean equals(Object o) {
        if (o == this) {
            return true;
        }
        if (!(o instanceof PhysicianProductAssociateId)) {
            return false;
        }
        PhysicianProductAssociateId other = ((PhysicianProductAssociateId) o);
        if (this.physicianId == null) {
            if (other.physicianId!= null) {
                return false;
            }
        } else {
            if (!this.physicianId.equals(other.physicianId)) {
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
        if (this.physicianId!= null) {
            rtn = (rtn + this.physicianId.hashCode());
        }
        rtn = (rtn* 37);
        if (this.productId!= null) {
            rtn = (rtn + this.productId.hashCode());
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

    public Integer getPhysicianId() {
        return physicianId;
    }

    public void setPhysicianId(Integer physicianId) {
        this.physicianId = physicianId;
    }

    public Integer getProductId() {
        return productId;
    }

    public void setProductId(Integer productId) {
        this.productId = productId;
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
