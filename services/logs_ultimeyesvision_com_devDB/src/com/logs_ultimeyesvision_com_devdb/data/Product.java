
package com.logs_ultimeyesvision_com_devdb.data;

import java.util.Date;
import java.util.HashSet;
import java.util.Set;


/**
 *  logs_ultimeyesvision_com_devDB.Product
 *  11/15/2012 09:16:38
 * 
 */
public class Product {

    private Integer id;
    private String name;
    private String version;
    private Date createdAt;
    private Date updatedAt;
    private String swregProductCode;
    private Set<com.logs_ultimeyesvision_com_devdb.data.CustomerProductAssociate> customerProductAssociates = new HashSet<com.logs_ultimeyesvision_com_devdb.data.CustomerProductAssociate>();
    private Set<com.logs_ultimeyesvision_com_devdb.data.PhysicianProductAssociate> physicianProductAssociates = new HashSet<com.logs_ultimeyesvision_com_devdb.data.PhysicianProductAssociate>();

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

    public String getVersion() {
        return version;
    }

    public void setVersion(String version) {
        this.version = version;
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

    public String getSwregProductCode() {
        return swregProductCode;
    }

    public void setSwregProductCode(String swregProductCode) {
        this.swregProductCode = swregProductCode;
    }

    public Set<com.logs_ultimeyesvision_com_devdb.data.CustomerProductAssociate> getCustomerProductAssociates() {
        return customerProductAssociates;
    }

    public void setCustomerProductAssociates(Set<com.logs_ultimeyesvision_com_devdb.data.CustomerProductAssociate> customerProductAssociates) {
        this.customerProductAssociates = customerProductAssociates;
    }

    public Set<com.logs_ultimeyesvision_com_devdb.data.PhysicianProductAssociate> getPhysicianProductAssociates() {
        return physicianProductAssociates;
    }

    public void setPhysicianProductAssociates(Set<com.logs_ultimeyesvision_com_devdb.data.PhysicianProductAssociate> physicianProductAssociates) {
        this.physicianProductAssociates = physicianProductAssociates;
    }

}
