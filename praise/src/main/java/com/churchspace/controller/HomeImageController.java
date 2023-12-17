package com.churchspace.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.churchspace.entity.HomeImage;
import com.churchspace.security.jwt.JwtUtils;
import com.churchspace.service.HomeImageService;

@RestController
@RequestMapping(value="/HomeImages")
@CrossOrigin("*")
public class HomeImageController {
	
	@Autowired
	JwtUtils jwtUtil;
	
	@Autowired
	HomeImageService homeImageService;
	
	@RequestMapping(
			value="/Pastor/SaveHeader",
			consumes = MediaType.APPLICATION_JSON_VALUE,
	        produces = MediaType.APPLICATION_JSON_VALUE,
	        method = RequestMethod.GET
			)
	public ResponseEntity<Object> saveHeader(@RequestHeader(value = "Authorization") String token, @RequestBody HomeImage image) {
		
		token = token.substring(7).trim();
	 	ResponseEntity <Object> responseEntity = null;
	    if (jwtUtil.validateJwtToken(token)) {
	        try {
	            homeImageService.save(image);
	            List<HomeImage> activeHomeImages = homeImageService.findHeader();
		        responseEntity=new ResponseEntity<Object>(activeHomeImages,HttpStatus.OK);
	        } catch (Exception e) {
	            System.out.println(e);
	            responseEntity=new ResponseEntity<Object>(e.getMessage(), HttpStatus.BAD_REQUEST);
	        } catch (Error e) {
	            System.out.println(e);
	            responseEntity=new ResponseEntity<Object>(e, HttpStatus.INTERNAL_SERVER_ERROR);
	        }
	    }
	    return responseEntity;
		}
	
	@RequestMapping(
			value="/Pastor/SaveBackground",
			consumes = MediaType.APPLICATION_JSON_VALUE,
	        produces = MediaType.APPLICATION_JSON_VALUE,
	        method = RequestMethod.GET
			)
	public ResponseEntity<Object> saveBackground(@RequestHeader(value = "Authorization") String token, @RequestBody HomeImage image) {
		
		token = token.substring(7).trim();
	 	ResponseEntity <Object> responseEntity = null;
	    if (jwtUtil.validateJwtToken(token)) {
	        try {
	            homeImageService.save(image);
	            List<HomeImage> activeHomeImages = homeImageService.findHeader();
		        responseEntity=new ResponseEntity<Object>(activeHomeImages,HttpStatus.OK);
	        } catch (Exception e) {
	            System.out.println(e);
	            responseEntity=new ResponseEntity<Object>(e.getMessage(), HttpStatus.BAD_REQUEST);
	        } catch (Error e) {
	            System.out.println(e);
	            responseEntity=new ResponseEntity<Object>(e, HttpStatus.INTERNAL_SERVER_ERROR);
	        }
	    }
	    return responseEntity;
		}
	
	@RequestMapping(
			value="/Pastor/SaveSlide",
			consumes = MediaType.APPLICATION_JSON_VALUE,
	        produces = MediaType.APPLICATION_JSON_VALUE,
	        method = RequestMethod.GET
			)
	public ResponseEntity<Object> saveSlide(@RequestHeader(value = "Authorization") String token, @RequestBody HomeImage image) {
		
		token = token.substring(7).trim();
	 	ResponseEntity <Object> responseEntity = null;
	    if (jwtUtil.validateJwtToken(token)) {
	        try {
	            homeImageService.save(image);
	            List<HomeImage> activeHomeImages = homeImageService.findActiveSlides();
		        responseEntity=new ResponseEntity<Object>(activeHomeImages,HttpStatus.OK);
	        } catch (Exception e) {
	            System.out.println(e);
	            responseEntity=new ResponseEntity<Object>(e.getMessage(), HttpStatus.BAD_REQUEST);
	        } catch (Error e) {
	            System.out.println(e);
	            responseEntity=new ResponseEntity<Object>(e, HttpStatus.INTERNAL_SERVER_ERROR);
	        }
	    }
	    return responseEntity;
		}
	
	
	
	@RequestMapping(
			value="/FindActiveSlides",
	        produces = MediaType.APPLICATION_JSON_VALUE,
	        method = RequestMethod.GET
			)
	public ResponseEntity<Object> findActive() {

	 	ResponseEntity <Object> responseEntity = null;

	        try {
	            List<HomeImage> activeHomeImages = homeImageService.findActiveSlides();
		        responseEntity=new ResponseEntity<Object>(activeHomeImages,HttpStatus.OK);
	        } catch (Exception e) {
	            System.out.println(e);
	            responseEntity=new ResponseEntity<Object>(e.getMessage(), HttpStatus.BAD_REQUEST);
	        } catch (Error e) {
	            System.out.println(e);
	            responseEntity=new ResponseEntity<Object>(e, HttpStatus.INTERNAL_SERVER_ERROR);
	        }
	    
	    return responseEntity;
		}
	
	@RequestMapping(
			value="/Pastor/FindAllSlides",
	        produces = MediaType.APPLICATION_JSON_VALUE,
	        method = RequestMethod.GET
			)
	public ResponseEntity<Object> findAllSlides(@RequestHeader(value = "Authorization") String token) {
		token = token.substring(7).trim();
	 	ResponseEntity <Object> responseEntity = null;
	    if (jwtUtil.validateJwtToken(token)) {

	        try {
	            List<HomeImage> allHomeImages = homeImageService.findAllSlides();
		        responseEntity=new ResponseEntity<Object>(allHomeImages,HttpStatus.OK);
	        } catch (Exception e) {
	            System.out.println(e);
	            responseEntity=new ResponseEntity<Object>(e.getMessage(), HttpStatus.BAD_REQUEST);
	        } catch (Error e) {
	            System.out.println(e);
	            responseEntity=new ResponseEntity<Object>(e, HttpStatus.INTERNAL_SERVER_ERROR);
	        }
	    }
	    return responseEntity;
		}
	
	@RequestMapping(
			value="/Pastor/FindBackground",
	        produces = MediaType.APPLICATION_JSON_VALUE,
	        method = RequestMethod.GET
			)
	public ResponseEntity<Object> findBackground(@RequestHeader(value = "Authorization") String token) {
		token = token.substring(7).trim();
	 	ResponseEntity <Object> responseEntity = null;
	    if (jwtUtil.validateJwtToken(token)) {

	        try {
	            List<HomeImage> backgrounds = homeImageService.findBackground();
		        responseEntity=new ResponseEntity<Object>(backgrounds,HttpStatus.OK);
	        } catch (Exception e) {
	            System.out.println(e);
	            responseEntity=new ResponseEntity<Object>(e.getMessage(), HttpStatus.BAD_REQUEST);
	        } catch (Error e) {
	            System.out.println(e);
	            responseEntity=new ResponseEntity<Object>(e, HttpStatus.INTERNAL_SERVER_ERROR);
	        }
	    }
	    return responseEntity;
		}
	
	@RequestMapping(
		    value = "/Pastor/UpdateBackground",
		    consumes = MediaType.APPLICATION_JSON_VALUE,
		    method = RequestMethod.POST
		)
		public List<HomeImage> updateBackground(@RequestHeader(value = "Authorization") String token, @RequestBody HomeImage photo) {
			
			token = token.substring(7).trim();
		    if (jwtUtil.validateJwtToken(token)) {
		        try {
		            homeImageService.update(photo);
		        } catch (Exception e) {
		            System.out.println(e);
		        } catch (Error e) {
		            System.out.println(e);
		        }
		    }
		    return homeImageService.findBackground();
			}
	
	@RequestMapping(
		    value = "/Pastor/updateHeader",
		    consumes = MediaType.APPLICATION_JSON_VALUE,
		    method = RequestMethod.POST
		)
		public List<HomeImage> updateHeader(@RequestHeader(value = "Authorization") String token, @RequestBody HomeImage photo) {
			
			token = token.substring(7).trim();
		    if (jwtUtil.validateJwtToken(token)) {
		        try {
		            homeImageService.update(photo);
		        } catch (Exception e) {
		            System.out.println(e);
		        } catch (Error e) {
		            System.out.println(e);
		        }
		    }
		    return homeImageService.findHeader();
			}
	
	
	}


