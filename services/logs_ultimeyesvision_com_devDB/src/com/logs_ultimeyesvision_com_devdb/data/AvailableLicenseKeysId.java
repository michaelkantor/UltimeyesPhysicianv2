
package com.logs_ultimeyesvision_com_devdb.data;

import java.io.Serializable;
import java.util.Date;


/**
 *  logs_ultimeyesvision_com_devDB.AvailableLicenseKeysId
 *  11/15/2012 09:16:38
 * 
 */
public class AvailableLicenseKeysId
    implements Serializable
{

    private String key;
    private Date createdAt;
    private Date updatedAt;

    public boolean equals(Object o) {
        if (o == this) {
            return true;
        }
        if (!(o instanceof AvailableLicenseKeysId)) {
            return false;
        }
        AvailableLicenseKeysId other = ((AvailableLicenseKeysId) o);
        if (this.key == null) {
            if (other.key!= null) {
                return false;
            }
        } else {
            if (!this.key.equals(other.key)) {
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
        if (this.key!= null) {
            rtn = (rtn + this.key.hashCode());
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

    public String getKey() {
        return key;
    }

    public void setKey(String key) {
        this.key = key;
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
