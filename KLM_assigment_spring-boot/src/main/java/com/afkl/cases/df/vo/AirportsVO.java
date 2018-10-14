package com.afkl.cases.df.vo;

public class AirportsVO  implements java.io.Serializable{

	/**
     * The serial version UID of this class. Needed for serialization.
     */
    private static final long serialVersionUID = -4435418187728854504L;
    
    private String code;
    private String  name; 
    private String  description;
	public String getCode() {
		return code;
	}
	public void setCode(String code) {
		this.code = code;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getDescription() {
		return description;
	}
	public void setDescription(String description) {
		this.description = description;
	}
    
    
}
