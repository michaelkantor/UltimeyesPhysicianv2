
package com.logs_ultimeyesvision_com_devdb.data;



/**
 *  logs_ultimeyesvision_com_devDB.PhysicianProductAssociate
 *  11/15/2012 09:16:38
 * 
 */
public class PhysicianProductAssociate {

    private PhysicianProductAssociateId id;
    private Physician physician;
    private Product product;

    public PhysicianProductAssociateId getId() {
        return id;
    }

    public void setId(PhysicianProductAssociateId id) {
        this.id = id;
    }

    public Physician getPhysician() {
        return physician;
    }

    public void setPhysician(Physician physician) {
        this.physician = physician;
    }

    public Product getProduct() {
        return product;
    }

    public void setProduct(Product product) {
        this.product = product;
    }

}
