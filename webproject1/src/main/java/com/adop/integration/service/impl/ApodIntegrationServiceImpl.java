package com.adop.integration.service.impl;

import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;
import org.springframework.web.util.UriComponentsBuilder;

import com.adop.integration.domain.ApodResponse;
import com.adop.integration.service.ApodIntegrationService;

@Service
public class ApodIntegrationServiceImpl implements ApodIntegrationService {

	private static final  String API_URL = "https://api.nasa.gov/planetary/apod";
	private static final String API_KEY = "ph4v3aZTBVbl61t1WtlS3BrpuF2uUEEL5Ns3iFb4";
	
	@Override
	public ApodResponse getPictureOfTheDay(String date, String start_date, String end_date, Integer count,
			Boolean thumbs) {
		RestTemplate restTemplate = new RestTemplate();
		UriComponentsBuilder uriBuilder = UriComponentsBuilder.fromUriString(API_URL).queryParam("api_key", API_KEY)
				.queryParam("date", date).queryParam("start_date", start_date).queryParam("end_date", end_date)
				.queryParam("count", count).queryParam("thumbs", thumbs);
		System.out.println("url==>"+uriBuilder.toUriString());
		try {
			ApodResponse response = restTemplate.getForObject(uriBuilder.toUriString(), ApodResponse.class);
			return response;
		} catch (Exception ex) {
			throw new RuntimeException("Unable to fetch Picture of the day for following with below exception:{} " + ex.getMessage(), ex);
		}
	}

	@Override
	public ApodResponse[] getPictureOfTheDays(String date, String start_date, String end_date, Integer count,
			Boolean thumbs) {
		RestTemplate restTemplate = new RestTemplate();
		UriComponentsBuilder uriBuilder = UriComponentsBuilder.fromUriString(API_URL).queryParam("api_key", API_KEY)
				.queryParam("date", date).queryParam("start_date", start_date).queryParam("end_date", end_date)
				.queryParam("count", count).queryParam("thumbs", thumbs);
		try {
			ApodResponse[] response = restTemplate.getForObject(uriBuilder.toUriString(), ApodResponse[].class);
			return response;
		} catch (Exception ex) {
			throw new RuntimeException("Unable to fetch Picture of the day for following with below exception:{} " + ex.getMessage(), ex);
		}
	}

}
