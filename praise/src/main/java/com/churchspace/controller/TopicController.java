package com.churchspace.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.churchspace.entity.Topic;
import com.churchspace.security.jwt.JwtUtils;
import com.churchspace.service.TopicService;



@RestController
@RequestMapping(value="/Topic")
@CrossOrigin("*")
public class TopicController {
	
	@Autowired
	JwtUtils jwtUtil;
	
	@Autowired
	TopicService topicService;

	@RequestMapping(
	        value="/User/findActiveBySubjectId/{subjectId}",
	        produces = MediaType.APPLICATION_JSON_VALUE,
	        method = RequestMethod.GET
	    )
	 public ResponseEntity<Object> findActiveBySubjectId(@RequestHeader(value = "Authorization") String token,@PathVariable Integer subjectId) {
	 	
	 	token=token.substring(7).trim();
	 	ResponseEntity <Object> responseEntity = null;
	 	if (jwtUtil.validateJwtToken(token)) {
	        try {
	           List<Topic> activeTopics = topicService.findActiveBySubjectId(subjectId);
	           responseEntity=new ResponseEntity<Object>(activeTopics,HttpStatus.OK);
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
