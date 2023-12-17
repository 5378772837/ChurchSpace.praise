package com.churchspace.controller;

import java.util.List;

import java.util.ArrayList;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;


@RestController
@RequestMapping(value="/HomeImageDescriptions")
@CrossOrigin("*")
public class HomeImageDescriptionController {
	
	
	@RequestMapping(
			value="/Get",
	        produces = MediaType.APPLICATION_JSON_VALUE,
	        method = RequestMethod.GET
			)
	public List<String> getDescriptions() {
		
	        try {
	        	List<String>descriptions = new ArrayList<String>();
	    		descriptions.add("Site Background");
	    		descriptions.add("Header Logo");
	    		descriptions.add("Home Page Slides");
	            return descriptions;
	        } catch (Exception e) {
	        	List<String>descriptions = new ArrayList<String>();
	    		descriptions.add("Site Background");
	    		descriptions.add("Header Logo");
	    		descriptions.add("Home Page Slides");
	            return descriptions;
	        } catch (Error e) {
	        	List<String>descriptions = new ArrayList<String>();
	    		descriptions.add("Site Background");
	    		descriptions.add("Header Logo");
	    		descriptions.add("Home Page Slides");
	            return descriptions;
	        }
	    
	
		}
	
	

}
