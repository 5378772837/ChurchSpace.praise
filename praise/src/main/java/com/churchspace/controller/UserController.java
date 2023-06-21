package com.churchspace.controller;

import java.util.List;
import java.util.Set;
import java.util.HashSet;
import java.util.Optional;
import java.util.ArrayList;
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


import com.churchspace.entity.Role;
import com.churchspace.entity.User;
import com.churchspace.security.jwt.AuthTokenFilter;
import com.churchspace.security.jwt.JwtUtils;
import com.churchspace.service.RoleService;
import com.churchspace.service.UserProfileService;
import com.churchspace.service.UserService;

@RestController
@RequestMapping(value="/user")
@CrossOrigin("*")
public class UserController {

	@Autowired
    UserService userService;
	
	@Autowired
    UserProfileService userProfileService;
	
	@Autowired
	RoleService roleService;
	
    @Autowired
    JwtUtils jwtUtil;
    
    @Autowired
    AuthTokenFilter authTokenFilter;
	
	@RequestMapping(
	        value="/Admin/findUserByEmail/{email}",
	        produces = MediaType.APPLICATION_JSON_VALUE,
	        method = RequestMethod.GET
	    )
	    public ResponseEntity<Object> findUserByEmail(@RequestHeader(value = "Authorization") String token,@PathVariable String email) {
			
			token=token.substring(7).trim();
			ResponseEntity <Object> responseEntity = null;
			
		 	if (jwtUtil.validateJwtToken(token)) {
		 	try {
		 		List<User> foundUsers = userService.findByEmail("%"+email+"%");
	            responseEntity = new ResponseEntity<Object>(foundUsers, HttpStatus.OK);
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
    value = "/Admin/updateUser",
    consumes = MediaType.APPLICATION_JSON_VALUE,
    produces = MediaType.APPLICATION_JSON_VALUE,
    method = RequestMethod.POST
)
public ResponseEntity<Object> updateUser(@RequestHeader(value = "Authorization") String token, @RequestBody User user) {
    System.out.println(user);
	
	token = token.substring(7).trim();
    ResponseEntity<Object> responseEntity = null;
    
    if (jwtUtil.validateJwtToken(token)) {
        try {
            userProfileService.save(user.getProfile());

            // Fetch and save the roles dynamically
            Set<Role> roles = new HashSet<>();
            for (Role userRole : user.getRoles()) {
                Optional<Role> role = roleService.findByName(userRole.getName());
                if (role.isPresent()) {
                    roles.add(role.get());
                } else {
                    // Handle the case when the role is not found in the database
                    throw new RuntimeException("Role '" + userRole + "' not found in the database");
                }
            }
            user.setRoles(roles);

            User updatedUser = userService.update(user);

            responseEntity = new ResponseEntity<Object>(updatedUser, HttpStatus.OK);
        } catch (Exception e) {
            System.out.println(e);
            responseEntity = new ResponseEntity<Object>(e.getMessage(), HttpStatus.BAD_REQUEST);
        } catch (Error e) {
            System.out.println(e);
            responseEntity = new ResponseEntity<Object>(e, HttpStatus.INTERNAL_SERVER_ERROR);
        }

    }
    
    return responseEntity;
}
	 
	 @RequestMapping(
		        value="/User/updateUser",
		        consumes = MediaType.APPLICATION_JSON_VALUE,
		        produces = MediaType.APPLICATION_JSON_VALUE,
		        method = RequestMethod.POST
		    )
 public ResponseEntity<Object> updateMyUser(@RequestHeader(value = "Authorization") String token, @RequestBody User user) {
		    System.out.println(user);
			
			token = token.substring(7).trim();
		    ResponseEntity<Object> responseEntity = null;
		    
		    if (jwtUtil.validateJwtToken(token)) {
		        try {
		            userProfileService.save(user.getProfile());

		            // Fetch and save the roles dynamically
		            Set<Role> roles = new HashSet<>();
		            for (Role userRole : user.getRoles()) {
		                Optional<Role> role = roleService.findByName(userRole.getName());
		                if (role.isPresent()) {
		                    roles.add(role.get());
		                } else {
		                    // Handle the case when the role is not found in the database
		                    throw new RuntimeException("Role '" + userRole + "' not found in the database");
		                }
		            }
		            user.setRoles(roles);

		            User updatedUser = userService.update(user);

		            responseEntity = new ResponseEntity<Object>(updatedUser, HttpStatus.OK);
		        } catch (Exception e) {
		            System.out.println(e);
		            responseEntity = new ResponseEntity<Object>(e.getMessage(), HttpStatus.BAD_REQUEST);
		        } catch (Error e) {
		            System.out.println(e);
		            responseEntity = new ResponseEntity<Object>(e, HttpStatus.INTERNAL_SERVER_ERROR);
		        }

		    }
		    
		    return responseEntity;
		}
	 
	 @RequestMapping(
		        value="/Admin/findAll",
		        produces = MediaType.APPLICATION_JSON_VALUE,
		        method = RequestMethod.GET
		    )
		 public ResponseEntity<Object> findAll(@RequestHeader(value = "Authorization") String token) {
		 	
		 	token=token.substring(7).trim();
		 	ResponseEntity <Object> responseEntity = null;
		 	if (jwtUtil.validateJwtToken(token)) {
		 		System.out.println("You are in the if statement");
		        try {
		           List<User> allUsers = userService.findAll();
		           responseEntity=new ResponseEntity<Object>(allUsers,HttpStatus.OK);
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
		        value="/User/findUserByEmail/{email}",
		        produces = MediaType.APPLICATION_JSON_VALUE,
		        method = RequestMethod.GET
		    )
		    public ResponseEntity <Object> findMeByEmail(@RequestHeader(value = "Authorization") String token,@PathVariable String email) {
				
				token=token.substring(7).trim();
				ResponseEntity <Object> responseEntity = null;
				
			 	if (jwtUtil.validateJwtToken(token)) {
			 	try {
			 		User foundUser = userService.findMeByEmail(email);
		            responseEntity = new ResponseEntity<Object>(foundUser, HttpStatus.OK);
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
			        value="/User/findAllActiveNames",
			        produces = MediaType.APPLICATION_JSON_VALUE,
			        method = RequestMethod.GET
			    )
			 public ResponseEntity<Object> findAllActiveNames(@RequestHeader(value = "Authorization") String token) {
			 	
			 	token=token.substring(7).trim();
			 	ResponseEntity <Object> responseEntity = null;
			 	if (jwtUtil.validateJwtToken(token)) {
			        try {
			           List<String>userNames=new ArrayList<String>();
			           List<User> allUsers = userService.findAll();
			           for(User user: allUsers) {
			        	   if(user.isEnabled()==true) {
			        		   userNames.add(user.getProfile().getName());
			        	   }
			           }
			           System.out.println(userNames);
			           responseEntity=new ResponseEntity<Object>(userNames,HttpStatus.OK);
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
