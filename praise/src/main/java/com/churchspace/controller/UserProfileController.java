package com.churchspace.controller;

import javax.management.relation.Role;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.churchspace.entity.ERole;
import com.churchspace.entity.UserProfile;
import com.churchspace.security.jwt.JwtUtils;
import com.churchspace.service.RoleService;
import com.churchspace.service.UserProfileService;
import com.churchspace.service.UserService;



@Controller
@RestController
@RequestMapping(value="/profile")
@CrossOrigin("*")
public class UserProfileController {
    @Autowired
    UserProfileService userProfileService;
    
    @Autowired
    UserService userService;

    @Autowired
    JwtUtils jwtUtil;

    @RequestMapping(
            value = "/Admin/updateProfile/{token}",
            consumes = MediaType.APPLICATION_JSON_VALUE,
            produces = MediaType.APPLICATION_JSON_VALUE,
            method = RequestMethod.POST
    )
    public ResponseEntity<Object> updateUserProfile(@PathVariable String token, @RequestBody UserProfile profile) {
        if (jwtUtil.validateJwtToken(token)) {
            try {
                UserProfile updatedUser = userProfileService.update(profile);
                return new ResponseEntity<>(updatedUser, HttpStatus.OK);
            } catch (Exception e) {
                System.out.println(e);
                return new ResponseEntity<>(e.getMessage(), HttpStatus.BAD_REQUEST);
            } catch (Error e) {
                System.out.println(e);
                return new ResponseEntity<>(e, HttpStatus.INTERNAL_SERVER_ERROR);
            }
        } else {
            return new ResponseEntity<>(HttpStatus.FORBIDDEN);
        }
    }

    @RequestMapping(
    	    value = "/Admin/findProfileById/{id}",
    	    produces = MediaType.APPLICATION_JSON_VALUE,
    	    method = RequestMethod.GET
    	)
    	public ResponseEntity<Object> findProfileById(@RequestHeader("Authorization") String token, @PathVariable Integer id) {
    	    if (jwtUtil.validateJwtToken(token)) {
    	        try {
    	        	System.out.println("my controller profile id is "+id);
    	            UserProfile foundProfile = userProfileService.findById(id);
    	            return new ResponseEntity<>(foundProfile, HttpStatus.OK);
    	        } catch (Exception e) {
    	            System.out.println(e);
    	            return new ResponseEntity<>(e.getMessage(), HttpStatus.BAD_REQUEST);
    	        } catch (Error e) {
    	            System.out.println(e);
    	            return new ResponseEntity<>(e, HttpStatus.INTERNAL_SERVER_ERROR);
    	        }
    	    } else {
    	        return new ResponseEntity<>(HttpStatus.FORBIDDEN);
    	    }
    	}

    @RequestMapping(
            value = "/User/updateProfile/{token}",
            consumes = MediaType.APPLICATION_JSON_VALUE,
            produces = MediaType.APPLICATION_JSON_VALUE,
            method = RequestMethod.POST
    )
    public ResponseEntity<Object> updateMyProfile(@PathVariable String token, @RequestBody UserProfile profile) {
        if (jwtUtil.validateJwtToken(token)) {
            String username = jwtUtil.getUserNameFromJwtToken(token);
            // Assuming User entity has a profile property
            UserProfile userProfile = userService.findByUsername(username).getProfile();
            if (userProfile.getId().equals(profile.getId())) {
                try {
                    UserProfile updatedUser = userProfileService.update(profile);
                    return new ResponseEntity<>(updatedUser, HttpStatus.OK);
                } catch (Exception e) {
                    System.out.println(e);
                    return new ResponseEntity<>(e.getMessage(), HttpStatus.BAD_REQUEST);
                } catch (Error e) {
                    System.out.println(e);
                    return new ResponseEntity<>(e, HttpStatus.INTERNAL_SERVER_ERROR);
                }
            } else {
                return new ResponseEntity<>(HttpStatus.FORBIDDEN);
            }
        } else {
            return new ResponseEntity<>(HttpStatus.FORBIDDEN);
        }
    }
}
