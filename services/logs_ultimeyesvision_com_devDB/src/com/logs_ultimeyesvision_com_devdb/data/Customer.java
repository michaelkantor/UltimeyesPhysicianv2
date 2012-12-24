
package com.logs_ultimeyesvision_com_devdb.data;

import java.util.Date;
import java.util.HashSet;
import java.util.Set;


/**
 *  logs_ultimeyesvision_com_devDB.Customer
 *  11/15/2012 09:16:38
 * 
 */
public class Customer {

    private Integer id;
    private CustomerType customerType;
    private Physician physician;
    private String firstName;
    private String lastName;
    private String middleInitial;
    private String ssn;
    private String tin;
    private Date dob;
    private String address;
    private String phone;
    private String email;
    private Date createdAt;
    private Date updatedAt;
    private String notes;
    private String address2;
    private String companyName;
    private String city;
    private String region;
    private String country;
    private String postalCode;
    private String telephone;
    private String login;
    private String password;
    private Set<com.logs_ultimeyesvision_com_devdb.data.UltimeyesLogStatic> ultimeyesLogStatics = new HashSet<com.logs_ultimeyesvision_com_devdb.data.UltimeyesLogStatic>();
    private Set<com.logs_ultimeyesvision_com_devdb.data.UltimeyesLogDynamic> ultimeyesLogDynamics = new HashSet<com.logs_ultimeyesvision_com_devdb.data.UltimeyesLogDynamic>();
    private Set<com.logs_ultimeyesvision_com_devdb.data.CustomerResellerAssociate> customerResellerAssociates = new HashSet<com.logs_ultimeyesvision_com_devdb.data.CustomerResellerAssociate>();
    private Set<com.logs_ultimeyesvision_com_devdb.data.UltimeyesLogCalibration> ultimeyesLogCalibrations = new HashSet<com.logs_ultimeyesvision_com_devdb.data.UltimeyesLogCalibration>();
    private Set<com.logs_ultimeyesvision_com_devdb.data.CustomerProductAssociate> customerProductAssociates = new HashSet<com.logs_ultimeyesvision_com_devdb.data.CustomerProductAssociate>();
    private Set<com.logs_ultimeyesvision_com_devdb.data.InternalUploadSessionFile> internalUploadSessionFiles = new HashSet<com.logs_ultimeyesvision_com_devdb.data.InternalUploadSessionFile>();
    private Set<com.logs_ultimeyesvision_com_devdb.data.UltimeyesLogSummary> ultimeyesLogSummaries = new HashSet<com.logs_ultimeyesvision_com_devdb.data.UltimeyesLogSummary>();

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public CustomerType getCustomerType() {
        return customerType;
    }

    public void setCustomerType(CustomerType customerType) {
        this.customerType = customerType;
    }

    public Physician getPhysician() {
        return physician;
    }

    public void setPhysician(Physician physician) {
        this.physician = physician;
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

    public String getNotes() {
        return notes;
    }

    public void setNotes(String notes) {
        this.notes = notes;
    }

    public String getAddress2() {
        return address2;
    }

    public void setAddress2(String address2) {
        this.address2 = address2;
    }

    public String getCompanyName() {
        return companyName;
    }

    public void setCompanyName(String companyName) {
        this.companyName = companyName;
    }

    public String getCity() {
        return city;
    }

    public void setCity(String city) {
        this.city = city;
    }

    public String getRegion() {
        return region;
    }

    public void setRegion(String region) {
        this.region = region;
    }

    public String getCountry() {
        return country;
    }

    public void setCountry(String country) {
        this.country = country;
    }

    public String getPostalCode() {
        return postalCode;
    }

    public void setPostalCode(String postalCode) {
        this.postalCode = postalCode;
    }

    public String getTelephone() {
        return telephone;
    }

    public void setTelephone(String telephone) {
        this.telephone = telephone;
    }

    public String getLogin() {
        return login;
    }

    public void setLogin(String login) {
        this.login = login;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public Set<com.logs_ultimeyesvision_com_devdb.data.UltimeyesLogStatic> getUltimeyesLogStatics() {
        return ultimeyesLogStatics;
    }

    public void setUltimeyesLogStatics(Set<com.logs_ultimeyesvision_com_devdb.data.UltimeyesLogStatic> ultimeyesLogStatics) {
        this.ultimeyesLogStatics = ultimeyesLogStatics;
    }

    public Set<com.logs_ultimeyesvision_com_devdb.data.UltimeyesLogDynamic> getUltimeyesLogDynamics() {
        return ultimeyesLogDynamics;
    }

    public void setUltimeyesLogDynamics(Set<com.logs_ultimeyesvision_com_devdb.data.UltimeyesLogDynamic> ultimeyesLogDynamics) {
        this.ultimeyesLogDynamics = ultimeyesLogDynamics;
    }

    public Set<com.logs_ultimeyesvision_com_devdb.data.CustomerResellerAssociate> getCustomerResellerAssociates() {
        return customerResellerAssociates;
    }

    public void setCustomerResellerAssociates(Set<com.logs_ultimeyesvision_com_devdb.data.CustomerResellerAssociate> customerResellerAssociates) {
        this.customerResellerAssociates = customerResellerAssociates;
    }

    public Set<com.logs_ultimeyesvision_com_devdb.data.UltimeyesLogCalibration> getUltimeyesLogCalibrations() {
        return ultimeyesLogCalibrations;
    }

    public void setUltimeyesLogCalibrations(Set<com.logs_ultimeyesvision_com_devdb.data.UltimeyesLogCalibration> ultimeyesLogCalibrations) {
        this.ultimeyesLogCalibrations = ultimeyesLogCalibrations;
    }

    public Set<com.logs_ultimeyesvision_com_devdb.data.CustomerProductAssociate> getCustomerProductAssociates() {
        return customerProductAssociates;
    }

    public void setCustomerProductAssociates(Set<com.logs_ultimeyesvision_com_devdb.data.CustomerProductAssociate> customerProductAssociates) {
        this.customerProductAssociates = customerProductAssociates;
    }

    public Set<com.logs_ultimeyesvision_com_devdb.data.InternalUploadSessionFile> getInternalUploadSessionFiles() {
        return internalUploadSessionFiles;
    }

    public void setInternalUploadSessionFiles(Set<com.logs_ultimeyesvision_com_devdb.data.InternalUploadSessionFile> internalUploadSessionFiles) {
        this.internalUploadSessionFiles = internalUploadSessionFiles;
    }

    public Set<com.logs_ultimeyesvision_com_devdb.data.UltimeyesLogSummary> getUltimeyesLogSummaries() {
        return ultimeyesLogSummaries;
    }

    public void setUltimeyesLogSummaries(Set<com.logs_ultimeyesvision_com_devdb.data.UltimeyesLogSummary> ultimeyesLogSummaries) {
        this.ultimeyesLogSummaries = ultimeyesLogSummaries;
    }

}
