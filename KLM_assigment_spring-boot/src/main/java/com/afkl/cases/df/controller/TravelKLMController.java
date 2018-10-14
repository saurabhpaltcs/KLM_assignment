package com.afkl.cases.df.controller;

import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.client.RestTemplate;

import com.afkl.cases.df.vo.AirportsVO;
import com.afkl.cases.df.vo.EntityObjectAirpot;
import com.afkl.cases.df.vo.FareVO;
import com.afkl.cases.df.vo.StaticsVO;

import com.afkl.cases.df.vo.AuthTokenInfo;

@Controller
public class TravelKLMController {

	@Autowired
	private com.afkl.cases.df.configuration.ApplicationProperties applicationProperties;

	@RequestMapping("airports")
	public ResponseEntity<EntityObjectAirpot>getAirportsList(HttpServletRequest request)  throws Exception{
		String klmRestPublicUrl = applicationProperties.getKlmRestPublicUrl();
		AuthTokenInfo AuthTokenInfo = AuthTokenRestClient.sendTokenRequest(klmRestPublicUrl);
		System.out.println("---"+AuthTokenInfo.getAccess_token());
		
		RestTemplate restTemplate = new RestTemplate();
		
		String locationUrl =klmRestPublicUrl+"airports?access_token="+AuthTokenInfo.getAccess_token();
		
		ResponseEntity<EntityObjectAirpot> responseEntity = restTemplate.getForEntity(locationUrl , EntityObjectAirpot.class);
		
		 System.out.println("-responseEntity.getBody()--"+responseEntity.getBody());
		 EntityObjectAirpot entityObjectAirpotvo = responseEntity.getBody();
		 System.out.println("-responseEntity.------------"+entityObjectAirpotvo.get_embedded().getLocations().get(0).getCode());
		 		 
		return new ResponseEntity<EntityObjectAirpot>(entityObjectAirpotvo,HttpStatus.OK);
	}
	
	@RequestMapping(value="fares/{originCode}/{destinationCode}")
	public ResponseEntity<FareVO>getFareDetails(@PathVariable("originCode") String originCode,@PathVariable("destinationCode") String destinationCode)  throws Exception{
		String klmRestPublicUrl = applicationProperties.getKlmRestPublicUrl();
		AuthTokenInfo AuthTokenInfo = AuthTokenRestClient.sendTokenRequest(klmRestPublicUrl);
		System.out.println("---"+AuthTokenInfo.getAccess_token());
		System.out.println("originCode "+originCode+" -destinationCode- "+destinationCode);
		
		RestTemplate restTemplate = new RestTemplate();
		
		String locationUrl =klmRestPublicUrl+"fares/"+originCode+"/"+destinationCode+"?access_token="+AuthTokenInfo.getAccess_token();
		
		ResponseEntity<FareVO> responseEntity = restTemplate.getForEntity(locationUrl , FareVO.class);
		
		 System.out.println("-responseEntity.getBody()--"+responseEntity.getBody());
		 FareVO fareVO = responseEntity.getBody();
		 
		return new ResponseEntity<FareVO>(fareVO,HttpStatus.OK);
	}


	@RequestMapping("statics")
	public ResponseEntity<StaticsVO>getStatics(HttpServletRequest request)  throws Exception{
		
		
		RestTemplate restTemplate = new RestTemplate();
		String klmRestStaticsUrl = applicationProperties.getKlmRestStaticsUrl();
		String locationUrl =klmRestStaticsUrl+"metrics/";
		
		Map<String, Object> metricsMap = restTemplate.getForEntity(locationUrl , Map.class).getBody();
		StaticsVO staticsVO = new StaticsVO();
		if(metricsMap != null && metricsMap.size()>0){
			
			metricsMap.entrySet().forEach(entry -> {
				
			    System.out.println("Key : " + entry.getKey() + " Value : " + entry.getValue());
			    if(entry.getKey().toString().contains("counter.status.2")
					&& !entry.getKey().toString().equals("counter.status.200.metrics.root")){
			    	staticsVO.setStatus2xx(staticsVO.getStatus2xx()+Integer.valueOf(entry.getValue().toString()));
			    }else if(entry.getKey().toString().contains("counter.status.4")){
			    	staticsVO.setStatus4xx(staticsVO.getStatus4xx()+Integer.valueOf(entry.getValue().toString()));
			    }else if(entry.getKey().toString().contains("counter.status.5")){
			    	staticsVO.setStatus5xx(staticsVO.getStatus5xx()+Integer.valueOf(entry.getValue().toString()));
			    }
			    
			    if(entry.getKey().toString().contains("counter.status")
					&& !entry.getKey().toString().equals("counter.status.200.metrics.root")){
			    	staticsVO.setTotalRequest(staticsVO.getTotalRequest()+Integer.valueOf(entry.getValue().toString()));
			    }
			}); 
		 
		}
		 
		return new ResponseEntity<StaticsVO>(staticsVO,HttpStatus.OK);
	}
	
}
