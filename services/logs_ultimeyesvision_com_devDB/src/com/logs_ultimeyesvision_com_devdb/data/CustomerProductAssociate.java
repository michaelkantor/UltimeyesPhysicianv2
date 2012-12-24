
package com.logs_ultimeyesvision_com_devdb.data;

import java.util.Date;


/**
 *  logs_ultimeyesvision_com_devDB.CustomerProductAssociate
 *  11/15/2012 09:16:38
 * 
 */
public class CustomerProductAssociate {

    private Integer id;
    private Customer customer;
    private License license;
    private Product product;
    private Date createdAt;
    private Date updatedAt;
    private String username;
    private String swregXml;
    private Boolean disabled;

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

    public License getLicense() {
        return license;
    }

    public void setLicense(License license) {
        this.license = license;
    }

    public Product getProduct() {
        return product;
    }

    public void setProduct(Product product) {
        this.product = product;
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

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getSwregXml() {
        return swregXml;
    }

    public void setSwregXml(String swregXml) {
        this.swregXml = swregXml;
    }

    public Boolean getDisabled() {
        return disabled;
    }

    public void setDisabled(Boolean disabled) {
        this.disabled = disabled;
    }

}
