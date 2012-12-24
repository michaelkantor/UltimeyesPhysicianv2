
package com.logs_ultimeyesvision_com_devdb.data;

import java.util.Date;
import java.util.HashSet;
import java.util.Set;


/**
 *  logs_ultimeyesvision_com_devDB.License
 *  11/15/2012 09:16:38
 * 
 */
public class License {

    private Integer id;
    private String key;
    private Integer seatsAllocated;
    private Integer macMax;
    private Short leasePeriod;
    private Date createdAt;
    private Date updatedAt;
    private Set<com.logs_ultimeyesvision_com_devdb.data.CustomerProductAssociate> customerProductAssociates = new HashSet<com.logs_ultimeyesvision_com_devdb.data.CustomerProductAssociate>();
    private Set<com.logs_ultimeyesvision_com_devdb.data.LicenseMac> licenseMacs = new HashSet<com.logs_ultimeyesvision_com_devdb.data.LicenseMac>();

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getKey() {
        return key;
    }

    public void setKey(String key) {
        this.key = key;
    }

    public Integer getSeatsAllocated() {
        return seatsAllocated;
    }

    public void setSeatsAllocated(Integer seatsAllocated) {
        this.seatsAllocated = seatsAllocated;
    }

    public Integer getMacMax() {
        return macMax;
    }

    public void setMacMax(Integer macMax) {
        this.macMax = macMax;
    }

    public Short getLeasePeriod() {
        return leasePeriod;
    }

    public void setLeasePeriod(Short leasePeriod) {
        this.leasePeriod = leasePeriod;
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

    public Set<com.logs_ultimeyesvision_com_devdb.data.CustomerProductAssociate> getCustomerProductAssociates() {
        return customerProductAssociates;
    }

    public void setCustomerProductAssociates(Set<com.logs_ultimeyesvision_com_devdb.data.CustomerProductAssociate> customerProductAssociates) {
        this.customerProductAssociates = customerProductAssociates;
    }

    public Set<com.logs_ultimeyesvision_com_devdb.data.LicenseMac> getLicenseMacs() {
        return licenseMacs;
    }

    public void setLicenseMacs(Set<com.logs_ultimeyesvision_com_devdb.data.LicenseMac> licenseMacs) {
        this.licenseMacs = licenseMacs;
    }

}
