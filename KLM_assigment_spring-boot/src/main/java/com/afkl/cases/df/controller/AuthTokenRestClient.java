package com.afkl.cases.df.controller;

import java.util.Arrays;

import org.apache.commons.codec.binary.Base64;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.client.RestTemplate;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.afkl.cases.df.vo.AuthTokenInfo;

@Controller("authTokenRestClient")
public class AuthTokenRestClient {

	
	
	private static HttpHeaders getHeaders(){
		HttpHeaders headers = new HttpHeaders();
		headers.setAccept(Arrays.asList(MediaType.APPLICATION_JSON));
		return headers;
	}

	private static HttpHeaders getHeadersWithClientCredentials(){
		String plainClientCredentials="travel-api-client:psw";
		String base64ClientCredentials = new String(Base64.encodeBase64(plainClientCredentials.getBytes()));

		HttpHeaders headers = getHeaders();
		headers.add("Authorization", "Basic " + base64ClientCredentials);
		return headers;
	}  

	public static AuthTokenInfo sendTokenRequest(String klmRestPublicUrl) throws Exception{
		System.out.println("sendTokenRequest-");
		RestTemplate restTemplate = new RestTemplate(); 
		AuthTokenInfo tokenInfo = null;

		ResponseEntity<String> response = null;

		HttpEntity<String> request = new HttpEntity<String>(getHeadersWithClientCredentials());
		
		String access_token_url = klmRestPublicUrl+"oauth/token?grant_type=client_credentials";

		response = restTemplate.exchange(access_token_url, HttpMethod.POST, request, String.class);

		System.out.println("Access Token Response ---------" + response.getBody());

		ObjectMapper objectMapper = new ObjectMapper();
		tokenInfo = objectMapper.readValue( response.getBody(), AuthTokenInfo.class);
				
		System.out.println(tokenInfo.getAccess_token());
		
		return tokenInfo;
	}

}
