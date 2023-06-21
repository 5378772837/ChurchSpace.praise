package com.churchspace.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.churchspace.entity.Message;
import com.churchspace.security.jwt.JwtUtils;
import com.churchspace.service.MessageService;

@RestController
@RequestMapping(value="/Message")
@CrossOrigin("*")
public class MessageController {
	
	
	
	@Autowired
	MessageService messageService;
	
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
	           List<Message> activeMessages = messageService.findActive();
	           responseEntity=new ResponseEntity<Object>(activeMessages,HttpStatus.OK);
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
	
	@RequestMapping(
	        value="/Pastor/findMessage/{text}",
	        produces = MediaType.APPLICATION_JSON_VALUE,
	        method = RequestMethod.GET
	    )
	    public ResponseEntity<Object> findMessage(@RequestHeader(value = "Authorization") String token,@PathVariable String text) {
			
			token=token.substring(7).trim();
			ResponseEntity <Object> responseEntity = null;
			
		 	if (jwtUtil.validateJwtToken(token)) {
		 	try {
		 		List<Message> foundMessages = messageService.findMessageByMessage("%"+text+"%");
	            responseEntity = new ResponseEntity<Object>(foundMessages, HttpStatus.OK);
	        } catch (Exception e) {
	            System.out.println(e);
	            responseEntity=new ResponseEntity<Object>(e.getMessage(), HttpStatus.BAD_REQUEST);
	        } catch (Error e) {
	            System.out.println(e);
	            responseEntity=new ResponseEntity<Object>(e, HttpStatus.INTERNAL_SERVER_ERROR);
	        }

		 	}return responseEntity;
		 }
	
	@RequestMapping(
		    value = "/User/updateMessage",
		    consumes = MediaType.APPLICATION_JSON_VALUE,
		    method = RequestMethod.POST
		)
		public void updateMessage(@RequestHeader(value = "Authorization") String token, @RequestBody Message Message) {
			
			token = token.substring(7).trim();
		    
		    if (jwtUtil.validateJwtToken(token)) {
		        try {
		            messageService.update(Message);
		        } catch (Exception e) {
		            System.out.println(e);
		        } catch (Error e) {
		            System.out.println(e);
		        }
		    }
		    
			}
	

	@RequestMapping(
		    value = "/User/addMessage",
		    consumes = MediaType.APPLICATION_JSON_VALUE,
		    method = RequestMethod.POST
		)
		public void addMessage(@RequestHeader(value = "Authorization") String token, @RequestBody Message Message) {
			
			token = token.substring(7).trim();
		    
		    if (jwtUtil.validateJwtToken(token)) {
		        try {
		            messageService.save(Message);
		        } catch (Exception e) {
		            System.out.println(e);
		        } catch (Error e) {
		            System.out.println(e);
		        }
		    }
		    
			}
	
	@RequestMapping(
	        value="/User/findMyMessages/{recipientName}",
	        produces = MediaType.APPLICATION_JSON_VALUE,
	        method = RequestMethod.GET
	    )
	 public ResponseEntity<Object> findActiveForUser(@RequestHeader(value = "Authorization") String token, @PathVariable String recipientName) {
	 	
	 	token=token.substring(7).trim();
	 	ResponseEntity <Object> responseEntity = null;
	 	if (jwtUtil.validateJwtToken(token)) {
	        try {
	           List<Message> activeMessages = messageService.findActiveForUser(recipientName);
	           responseEntity=new ResponseEntity<Object>(activeMessages,HttpStatus.OK);
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
