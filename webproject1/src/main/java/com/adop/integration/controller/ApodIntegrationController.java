package com.adop.integration.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.stereotype.Controller;


import com.adop.integration.domain.ApodResponse;
import com.adop.integration.service.ApodIntegrationService;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping(value = "/nasa")
public class ApodIntegrationController {
	
	@Autowired
	private ApodIntegrationService apodIntegrationService;
	
	   @GetMapping("/apod")
	    public ApodResponse getPictureOfTheDay (@RequestParam(name = "date", required = false) String date,
	                                     @RequestParam(name="start_date", required = false) String start_date,
	                                     @RequestParam(name="end_date", required = false) String end_date,
	                                     @RequestParam(name="count", required = false) String count,
	                                     @RequestParam(name="thumbs", required = false) String thumbs ) {
	        return apodIntegrationService.getPictureOfTheDay(date, start_date, end_date, 
			(count==null) ?  null: Integer.parseInt(count), 
			(thumbs=="true"));
	    }

		@GetMapping("/apods")
	    public ApodResponse[] getPictureOfTheDays (@RequestParam(name = "date", required = false) String date,
	                                     @RequestParam(name="start_date", required = false) String start_date,
	                                     @RequestParam(name="end_date", required = false) String end_date,
	                                     @RequestParam(name="count", required = false) String count,
	                                     @RequestParam(name="thumbs", required = false) String thumbs ) {
	        return apodIntegrationService.getPictureOfTheDays(date, start_date, end_date, 
			(count==null) ?  null: Integer.parseInt(count), 
			(thumbs=="true"));
	    }

}


@Controller
class HomeController {

    //  @GetMapping(value = {"/", "/{x:[\\w\\-]+}", "/{x:^(?!api$).*$}/**/{y:[\\w\\-]+}" })
    @GetMapping(value = {"/", "/home", "/page2"})
    public String index(){
        return "index";
    }
}