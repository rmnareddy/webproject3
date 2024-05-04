package com.adop.integration.application;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.security.servlet.SecurityAutoConfiguration;
import org.springframework.context.annotation.ComponentScan;

@SpringBootApplication(exclude = {SecurityAutoConfiguration.class })
@ComponentScan({"com.adop.integration"})
public class AdopintegrationApplication {

	public static void main(String[] args) {
		SpringApplication.run(AdopintegrationApplication.class, args);
	}

}
