
package com.logs_ultimeyesvision_com_devdb.data;

import java.util.Date;
import java.util.HashSet;
import java.util.Set;


/**
 *  logs_ultimeyesvision_com_devDB.CustomerType
 *  11/15/2012 09:16:38
 * 
 */
public class CustomerType {

    private Integer id;
    private String name;
    private Date createdAt;
    private Date updatedAt;
    private Set<com.logs_ultimeyesvision_com_devdb.data.Customer> customers = new HashSet<com.logs_ultimeyesvision_com_devdb.data.Customer>();

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

    public Set<com.logs_ultimeyesvision_com_devdb.data.Customer> getCustomers() {
        return customers;
    }

    public void setCustomers(Set<com.logs_ultimeyesvision_com_devdb.data.Customer> customers) {
        this.customers = customers;
    }

}
