
package com.logs_ultimeyesvision_com_devdb.data;

import java.io.Serializable;


/**
 *  logs_ultimeyesvision_com_devDB.ViewSeatsUsedPerResellerId
 *  11/15/2012 09:16:38
 * 
 */
public class ViewSeatsUsedPerResellerId
    implements Serializable
{

    private Integer resellerId;
    private String name;
    private Integer seatsAllocated;
    private Long seatsUsed;

    public boolean equals(Object o) {
        if (o == this) {
            return true;
        }
        if (!(o instanceof ViewSeatsUsedPerResellerId)) {
            return false;
        }
        ViewSeatsUsedPerResellerId other = ((ViewSeatsUsedPerResellerId) o);
        if (this.resellerId == null) {
            if (other.resellerId!= null) {
                return false;
            }
        } else {
            if (!this.resellerId.equals(other.resellerId)) {
                return false;
            }
        }
        if (this.name == null) {
            if (other.name!= null) {
                return false;
            }
        } else {
            if (!this.name.equals(other.name)) {
                return false;
            }
        }
        if (this.seatsAllocated == null) {
            if (other.seatsAllocated!= null) {
                return false;
            }
        } else {
            if (!this.seatsAllocated.equals(other.seatsAllocated)) {
                return false;
            }
        }
        if (this.seatsUsed == null) {
            if (other.seatsUsed!= null) {
                return false;
            }
        } else {
            if (!this.seatsUsed.equals(other.seatsUsed)) {
                return false;
            }
        }
        return true;
    }

    public int hashCode() {
        int rtn = 17;
        rtn = (rtn* 37);
        if (this.resellerId!= null) {
            rtn = (rtn + this.resellerId.hashCode());
        }
        rtn = (rtn* 37);
        if (this.name!= null) {
            rtn = (rtn + this.name.hashCode());
        }
        rtn = (rtn* 37);
        if (this.seatsAllocated!= null) {
            rtn = (rtn + this.seatsAllocated.hashCode());
        }
        rtn = (rtn* 37);
        if (this.seatsUsed!= null) {
            rtn = (rtn + this.seatsUsed.hashCode());
        }
        return rtn;
    }

    public Integer getResellerId() {
        return resellerId;
    }

    public void setResellerId(Integer resellerId) {
        this.resellerId = resellerId;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Integer getSeatsAllocated() {
        return seatsAllocated;
    }

    public void setSeatsAllocated(Integer seatsAllocated) {
        this.seatsAllocated = seatsAllocated;
    }

    public Long getSeatsUsed() {
        return seatsUsed;
    }

    public void setSeatsUsed(Long seatsUsed) {
        this.seatsUsed = seatsUsed;
    }

}
