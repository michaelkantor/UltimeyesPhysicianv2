
package com.logs_ultimeyesvision_com_devdb.data;

import java.util.Date;
import java.util.HashSet;
import java.util.Set;


/**
 *  logs_ultimeyesvision_com_devDB.Physician
 *  11/15/2012 09:16:38
 * 
 */
public class Physician {

    private Integer id;
    private String firstName;
    private String lastName;
    private String middleInitial;
    private String medicalLicenseNumber;
    private String ssn;
    private String tin;
    private Date dob;
    private String address;
    private String phone;
    private String email;
    private String password;
    private Date createdAt;
    private Date updatedAt;
    private Set<com.logs_ultimeyesvision_com_devdb.data.Customer> customers = new HashSet<com.logs_ultimeyesvision_com_devdb.data.Customer>();
    private Set<com.logs_ultimeyesvision_com_devdb.data.PhysicianProductAssociate> physicianProductAssociates = new HashSet<com.logs_ultimeyesvision_com_devdb.data.PhysicianProductAssociate>();

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public String getMiddleInitial() {
        return middleInitial;
    }

    public void setMiddleInitial(String middleInitial) {
        this.middleInitial = middleInitial;
    }

    public String getMedicalLicenseNumber() {
        return medicalLicenseNumber;
    }

    public void setMedicalLicenseNumber(String medicalLicenseNumber) {
        this.medicalLicenseNumber = medicalLicenseNumber;
    }

    public String getSsn() {
        return ssn;
    }

    public void setSsn(String ssn) {
        this.ssn = ssn;
    }

    public String getTin() {
        return tin;
    }

    public void setTin(String tin) {
        this.tin = tin;
    }

    public Date getDob() {
        return dob;
    }

    public void setDob(Date dob) {
        this.dob = dob;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
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

    public Set<com.logs_ultimeyesvision_com_devdb.data.PhysicianProductAssociate> getPhysicianProductAssociates() {
        return physicianProductAssociates;
    }

    public void setPhysicianProductAssociates(Set<com.logs_ultimeyesvision_com_devdb.data.PhysicianProductAssociate> physicianProductAssociates) {
        this.physicianProductAssociates = physicianProductAssociates;
    }

}
