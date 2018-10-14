package com.afkl.cases.df.configuration;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.env.Environment;
import org.springframework.stereotype.Component;
import org.springframework.context.annotation.PropertySource;

@Component
@PropertySource("application.yml")
public class ApplicationProperties {

private final java.lang.String klmRestPublicUrl;
private final java.lang.String klmRestStaticsUrl;

@Autowired
public ApplicationProperties(Environment env){
	this.klmRestPublicUrl = env.getRequiredProperty("klm-rest-public-url");
	this.klmRestStaticsUrl = env.getRequiredProperty("klm-rest-statics-url");
	
}

public java.lang.String getKlmRestPublicUrl() {
		return klmRestPublicUrl;
	}
public java.lang.String getKlmRestStaticsUrl() {
		return klmRestStaticsUrl;
	}

}