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

import com.churchspace.entity.Link;
import com.churchspace.security.jwt.JwtUtils;
import com.churchspace.service.LinkService;

@RestController
@RequestMapping(value="/Link")
@CrossOrigin("*")
public class LinkController {
	
	@Autowired
	JwtUtils jwtUtil;
	
	@Autowired
	LinkService linkService;
	
	@RequestMapping(
			value="/Pastor/save",
			consumes = MediaType.APPLICATION_JSON_VALUE,
	        produces = MediaType.APPLICATION_JSON_VALUE,
	        method = RequestMethod.POST
			)
	public ResponseEntity<Object> saveLink(@RequestHeader(value = "Authorization") String token, @RequestBody Link link) {
		
		token = token.substring(7).trim();
	 	ResponseEntity <Object> responseEntity = null;
	    if (jwtUtil.validateJwtToken(token)) {
	        try {
	            linkService.save(link);
	            List<Link> activeLinks = linkService.findActive();
		        responseEntity=new ResponseEntity<Object>(activeLinks,HttpStatus.OK);
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
			value="/Pastor/findActive",
	        produces = MediaType.APPLICATION_JSON_VALUE,
	        method = RequestMethod.GET
			)
	public ResponseEntity<Object> findActive() {

	 	ResponseEntity <Object> responseEntity = null;

	        try {
	            List<Link> activeLinks = linkService.findActive();
		        responseEntity=new ResponseEntity<Object>(activeLinks,HttpStatus.OK);
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
			value="/Pastor/findAll",
	        produces = MediaType.APPLICATION_JSON_VALUE,
	        method = RequestMethod.GET
			)
	public ResponseEntity<Object> findAll(@RequestHeader(value = "Authorization") String token) {
		token = token.substring(7).trim();
	 	ResponseEntity <Object> responseEntity = null;
	    if (jwtUtil.validateJwtToken(token)) {

	        try {
	            List<Link> allLinks = linkService.findAll();
		        responseEntity=new ResponseEntity<Object>(allLinks,HttpStatus.OK);
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
		    value = "/Pastor/updateLink",
		    consumes = MediaType.APPLICATION_JSON_VALUE,
		    method = RequestMethod.POST
		)
		public List<Link> updateLink(@RequestHeader(value = "Authorization") String token, @RequestBody Link link) {
			
			token = token.substring(7).trim();
		    if (jwtUtil.validateJwtToken(token)) {
		        try {
		            linkService.update(link);
		        } catch (Exception e) {
		            System.out.println(e);
		        } catch (Error e) {
		            System.out.println(e);
		        }
		    }
		    return linkService.findActive();
			}
	
	
		
	}


