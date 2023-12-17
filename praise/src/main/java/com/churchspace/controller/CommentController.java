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

import com.churchspace.entity.Comment;
import com.churchspace.security.jwt.JwtUtils;
import com.churchspace.service.CommentService;

@RestController
@RequestMapping(value="/Comment")
@CrossOrigin("*")
public class CommentController {
	
	@Autowired
	JwtUtils jwtUtil;
	
	@Autowired
	CommentService commentService;
	

	@RequestMapping(
	        value="/User/findActiveByPostId/{postId}",
	        produces = MediaType.APPLICATION_JSON_VALUE,
	        method = RequestMethod.GET
	    )
	 public ResponseEntity<Object> findActiveByPostId(@RequestHeader(value = "Authorization") String token,@PathVariable Integer postId) {
	 	
	 	token=token.substring(7).trim();
	 	ResponseEntity <Object> responseEntity = null;
	 	if (jwtUtil.validateJwtToken(token)) {
	        try {
	           List<Comment> activeComments = commentService.findActiveByPostId(postId);
	           responseEntity=new ResponseEntity<Object>(activeComments,HttpStatus.OK);
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
		    value = "/User/addComment",
		    consumes = MediaType.APPLICATION_JSON_VALUE,
		    produces = MediaType.APPLICATION_JSON_VALUE,
		    method = RequestMethod.POST
		)
		public List <Comment> save(@RequestHeader(value = "Authorization") String token, @RequestBody Comment comment) {
			System.out.println(comment);
			token = token.substring(7).trim();
		    List<Comment>comments = null;
		    if (jwtUtil.validateJwtToken(token)) {
		    	try {
		            comments=commentService.save(comment);
		        } catch (Exception e) {
		            System.out.println(e);
		        } catch (Error e) {
		            System.out.println(e);
		        }
		    }return comments;
		    
			}
	
	
	@RequestMapping(
	        value="/Pastor/findComment/{text}",
	        produces = MediaType.APPLICATION_JSON_VALUE,
	        method = RequestMethod.GET
	    )
	    public ResponseEntity<Object> findCommentByComment(@RequestHeader(value = "Authorization") String token,@PathVariable String text) {
			
			token=token.substring(7).trim();
			ResponseEntity <Object> responseEntity = null;
			
		 	if (jwtUtil.validateJwtToken(token)) {
		 	try {
		 		List<Comment> foundComments = commentService.findCommentByComment("%"+text+"%");
	            responseEntity = new ResponseEntity<Object>(foundComments, HttpStatus.OK);
	        } catch (Exception e) {
	            System.out.println(e);
	            responseEntity=new ResponseEntity<Object>(e.getMessage(), HttpStatus.BAD_REQUEST);
	        } catch (Error e) {
	            System.out.println(e);
	            responseEntity=new ResponseEntity<Object>(e, HttpStatus.INTERNAL_SERVER_ERROR);
	        }

		 	}return responseEntity;
		 }

}
