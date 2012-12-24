
package com.logs_ultimeyesvision_com_devdb.data;

import java.util.Date;
import java.util.HashSet;
import java.util.Set;


/**
 *  logs_ultimeyesvision_com_devDB.Reseller
 *  11/15/2012 09:16:38
 * 
 */
public class Reseller {

    private Integer id;
    private String name;
    private Integer seatsAllocated;
    private Boolean unlimitedSeats;
    private Boolean disabled;
    private Date createdAt;
    private Date updatedAt;
    private Set<com.logs_ultimeyesvision_com_devdb.data.ResellerUsers> resellerUserses = new HashSet<com.logs_ultimeyesvision_com_devdb.data.ResellerUsers>();
    private Set<com.logs_ultimeyesvision_com_devdb.data.CustomerResellerAssociate> customerResellerAssociates = new HashSet<com.logs_ultimeyesvision_com_devdb.data.CustomerResellerAssociate>();

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
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

    public Boolean getUnlimitedSeats() {
        return unlimitedSeats;
    }

    public void setUnlimitedSeats(Boolean unlimitedSeats) {
        this.unlimitedSeats = unlimitedSeats;
    }

    public Boolean getDisabled() {
        return disabled;
    }

    public void setDisabled(Boolean disabled) {
        this.disabled = disabled;
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

    public Set<com.logs_ultimeyesvision_com_devdb.data.ResellerUsers> getResellerUserses() {
        return resellerUserses;
    }

    public void setResellerUserses(Set<com.logs_ultimeyesvision_com_devdb.data.ResellerUsers> resellerUserses) {
        this.resellerUserses = resellerUserses;
    }

    public Set<com.logs_ultimeyesvision_com_devdb.data.CustomerResellerAssociate> getCustomerResellerAssociates() {
        return customerResellerAssociates;
    }

    public void setCustomerResellerAssociates(Set<com.logs_ultimeyesvision_com_devdb.data.CustomerResellerAssociate> customerResellerAssociates) {
        this.customerResellerAssociates = customerResellerAssociates;
    }

}
