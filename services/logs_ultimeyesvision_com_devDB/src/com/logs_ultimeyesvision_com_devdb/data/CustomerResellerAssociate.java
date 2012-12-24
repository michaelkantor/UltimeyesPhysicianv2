
package com.logs_ultimeyesvision_com_devdb.data;

import java.util.Date;


/**
 *  logs_ultimeyesvision_com_devDB.CustomerResellerAssociate
 *  11/15/2012 09:16:38
 * 
 */
public class CustomerResellerAssociate {

    private Integer id;
    private Customer customer;
    private Reseller reseller;
    private Date createdAt;
    private Date updatedAt;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public Customer getCustomer() {
        return customer;
    }

    public void setCustomer(Customer customer) {
        this.customer = customer;
    }

    public Reseller getReseller() {
        return reseller;
    }

    public void setReseller(Reseller reseller) {
        this.reseller = reseller;
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
