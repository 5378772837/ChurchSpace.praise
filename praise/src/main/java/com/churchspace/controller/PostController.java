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

import com.churchspace.entity.Post;

import com.churchspace.security.jwt.JwtUtils;
import com.churchspace.service.PostService;

@RestController
@RequestMapping(value="/Post")
@CrossOrigin("*")
public class PostController {
	
	@Autowired
	JwtUtils jwtUtil;
	
	@Autowired
	PostService postService;
	

	@RequestMapping(
	        value="/User/findActiveByTopicId/{topicId}",
	        produces = MediaType.APPLICATION_JSON_VALUE,
	        method = RequestMethod.GET
	    )
	 public ResponseEntity<Object> findActiveByTopicId(@RequestHeader(value = "Authorization") String token,@PathVariable Integer topicId) {
	 	
	 	token=token.substring(7).trim();
	 	ResponseEntity <Object> responseEntity = null;
	 	if (jwtUtil.validateJwtToken(token)) {
	        try {
	           List<Post> activeTopics = postService.findActiveByTopicId(topicId);
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
	
	@RequestMapping(
		    value = "/User/addPost",
		    consumes = MediaType.APPLICATION_JSON_VALUE,
		    produces = MediaType.APPLICATION_JSON_VALUE,
		    method = RequestMethod.POST
		)
		public List <Post> save(@RequestHeader(value = "Authorization") String token, @RequestBody Post post) {
			System.out.println(post);
			token = token.substring(7).trim();
		    List<Post>posts = null;
		    if (jwtUtil.validateJwtToken(token)) {
		    	try {
		            posts=postService.save(post);
		        } catch (Exception e) {
		            System.out.println(e);
		        } catch (Error e) {
		            System.out.println(e);
		        }
		    }return posts;
		    
			}
	
	
	@RequestMapping(
	        value="/Pastor/findPost/{text}",
	        produces = MediaType.APPLICATION_JSON_VALUE,
	        method = RequestMethod.GET
	    )
	    public ResponseEntity<Object> findPostByPost(@RequestHeader(value = "Authorization") String token,@PathVariable String text) {
			
			token=token.substring(7).trim();
			ResponseEntity <Object> responseEntity = null;
			
		 	if (jwtUtil.validateJwtToken(token)) {
		 	try {
		 		List<Post> foundPosts = postService.findPostByPost("%"+text+"%");
	            responseEntity = new ResponseEntity<Object>(foundPosts, HttpStatus.OK);
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
