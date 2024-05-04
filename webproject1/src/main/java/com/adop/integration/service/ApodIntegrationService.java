package com.adop.integration.service;

import com.adop.integration.domain.ApodResponse;

public interface ApodIntegrationService {

	ApodResponse getPictureOfTheDay(String date, String start_date, String end_date, Integer count,
			Boolean thumbs);

	ApodResponse[] getPictureOfTheDays(String date, String start_date, String end_date, Integer count,
			Boolean thumbs);

}
