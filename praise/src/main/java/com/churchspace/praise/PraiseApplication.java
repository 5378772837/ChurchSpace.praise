package com.churchspace.praise;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;

@SpringBootApplication
@ComponentScan(basePackages ="com.churchspace")
public class PraiseApplication {

	public static void main(String[] args) {
		SpringApplication.run(PraiseApplication.class, args);
	}

}
