package com.afkl.cases.df.vo;

import java.util.List;

public class Embedded implements java.io.Serializable{

	/**
     * The serial version UID of this class. Needed for serialization.
     */
    private static final long serialVersionUID = -4435418187728854504L;

    private List<AirportsVO> locations;

	public List<AirportsVO> getLocations() {
		return locations;
	}

	public void setLocations(List<AirportsVO> locations) {
		this.locations = locations;
	}
}
