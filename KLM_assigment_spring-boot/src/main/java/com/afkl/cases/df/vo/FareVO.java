package com.afkl.cases.df.vo;

public class FareVO implements java.io.Serializable{

	/**
     * The serial version UID of this class. Needed for serialization.
     */
    private static final long serialVersionUID = -4435418187728854504L;

    private String amount;
    private String currency;
    private String origin;
    private String destination;
    
	public String getAmount() {
		return amount;
	}
	public void setAmount(String amount) {
		this.amount = amount;
	}
	public String getCurrency() {
		return currency;
	}
	public void setCurrency(String currency) {
		this.currency = currency;
	}
	public String getOrigin() {
		return origin;
	}
	public void setOrigin(String origin) {
		this.origin = origin;
	}
	public String getDestination() {
		return destination;
	}
	public void setDestination(String destination) {
		this.destination = destination;
	}
    	
}
