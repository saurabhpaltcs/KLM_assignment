package com.afkl.cases.df.vo;

public class StaticsVO  implements java.io.Serializable{

	/**
     * The serial version UID of this class. Needed for serialization.
     */
    private static final long serialVersionUID = -4435418187728854504L;
	
	private int totalRequest;
	private int status2xx;
	private int status4xx;
	private int status5xx;
	
	public int getTotalRequest() {
		return totalRequest;
	}
	public void setTotalRequest(int totalRequest) {
		this.totalRequest = totalRequest;
	}
	public int getStatus2xx() {
		return status2xx;
	}
	public void setStatus2xx(int status2xx) {
		this.status2xx = status2xx;
	}
	public int getStatus4xx() {
		return status4xx;
	}
	public void setStatus4xx(int status4xx) {
		this.status4xx = status4xx;
	}
	public int getStatus5xx() {
		return status5xx;
	}
	public void setStatus5xx(int status5xx) {
		this.status5xx = status5xx;
	}
	
}
