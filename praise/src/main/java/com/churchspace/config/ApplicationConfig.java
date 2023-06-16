package com.churchspace.config;

import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

@Configuration
@EnableJpaRepositories(basePackages="com.churchspace.repo")
@EntityScan(basePackages="com.churchspace.entity")


public class ApplicationConfig {
	

}

