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
	           List<Subject> activeSubjects = subjectService.findActive();
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
	
	@RequestMapping(
	        value="/Pastor/findSubject/{text}",
	        produces = MediaType.APPLICATION_JSON_VALUE,
	        method = RequestMethod.GET
	    )
	    public ResponseEntity<Object> findSubject(@RequestHeader(value = "Authorization") String token,@PathVariable String text) {
			
			token=token.substring(7).trim();
			ResponseEntity <Object> responseEntity = null;
			
		 	if (jwtUtil.validateJwtToken(token)) {
		 	try {
		 		List<Subject> foundSubjects = subjectService.findSubjectBySubject("%"+text+"%");
	            responseEntity = new ResponseEntity<Object>(foundSubjects, HttpStatus.OK);
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
		    value = "/Pastor/updateSubject",
		    consumes = MediaType.APPLICATION_JSON_VALUE,
		    method = RequestMethod.POST
		)
		public List<Subject> updateSubject(@RequestHeader(value = "Authorization") String token, @RequestBody Subject subject) {
			
			token = token.substring(7).trim();
		    if (jwtUtil.validateJwtToken(token)) {
		        try {
		            subjectService.update(subject);
		        } catch (Exception e) {
		            System.out.println(e);
		        } catch (Error e) {
		            System.out.println(e);
		        }
		    }
		    return subjectService.findActive();
			}
	

	@RequestMapping(
		    value = "/Pastor/addSubject",
		    consumes = MediaType.APPLICATION_JSON_VALUE,
		    method = RequestMethod.POST
		)
		public ResponseEntity<Object> saveSubject(@RequestHeader(value = "Authorization") String token, @RequestBody Subject subject) {
			
			token = token.substring(7).trim();
		 	ResponseEntity <Object> responseEntity = null;
		    if (jwtUtil.validateJwtToken(token)) {
		        try {
		            subjectService.save(subject);
		            List<Subject> activeSubjects = subjectService.findActive();
			        responseEntity=new ResponseEntity<Object>(activeSubjects,HttpStatus.OK);
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
	        value="/User/findActive",
	        produces = MediaType.APPLICATION_JSON_VALUE,
	        method = RequestMethod.GET
	    )
	 public ResponseEntity<Object> findActiveForUser(@RequestHeader(value = "Authorization") String token) {
	 	
	 	token=token.substring(7).trim();
	 	ResponseEntity <Object> responseEntity = null;
	 	if (jwtUtil.validateJwtToken(token)) {
	        try {
	           List<Subject> activeSubjects = subjectService.findActive();
	           responseEntity=new ResponseEntity<Object>(activeSubjects,HttpStatus.OK);
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
	

}
