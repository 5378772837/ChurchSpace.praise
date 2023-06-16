package com.churchspace.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.churchspace.entity.Subject;
import com.churchspace.security.jwt.JwtUtils;
import com.churchspace.service.SubjectService;

@RestController
@RequestMapping(value="/Subject")
@CrossOrigin("*")

public class SubjectController {
	
	@Autowired
	SubjectService subjectService;
	
	@Autowired
	JwtUtils jwtUtil;
	
	
	@RequestMapping(
	        value="/Pastor/findActive",
	        produces = MediaType.APPLICATION_JSON_VALUE,
	        method = RequestMethod.GET
	    )
	 public ResponseEntity<Object> findActive(@RequestHeader(value = "Authorization") String token) {
	 	
	 	token=token.substring(7).trim();
	 	ResponseEntity <Object> responseEntity = null;
	 	if (jwtUtil.validateJwtToken(token)) {
	        try {
	           Optional<Subject> activeSubjects = subjectService.findActive();
	           responseEntity=new ResponseEntity<Object>(activeSubjects,HttpStatus.OK);
	        } catch (Exception e) {
	            System.out.println(e);
	            responseEntity=new ResponseEntity<Object>(e.getMessage(), HttpStatus.BAD_REQUEST);
	        } catch (Error e) {
	            System.out.println(e);
	            responseEntity=new ResponseEntity<Object>(e, HttpStatus.INTERNAL_SERVER_ERROR);
	        }
	 		}
	 	System.out.println(responseEntity);
	 	return responseEntity;

	    }

}
