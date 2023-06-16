package com.churchspace.service;

import javax.security.auth.login.AccountNotFoundException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.churchspace.entity.UserProfile;
import com.churchspace.repo.UserProfileRepo;

@Service
public class UserProfileService {
	
	@Autowired
	UserProfileRepo userProfileRepo;
	
	public UserProfile save(UserProfile profile){
	
			return userProfileRepo.save(profile);

	}
	
	public UserProfile findById(Integer profileId) throws Error {
		System.out.println("my service profile id is "+profileId);
	        if(userProfileRepo.findById(profileId).isPresent()) {
	            return userProfileRepo.findById(profileId).get();
	        }
	        
	        throw new Error("No user profile by that id is present, Profile not found");
	        
	    }
	
	public UserProfile update(UserProfile profile) throws Exception {	
        if(profile.getId() != null) {
	        return userProfileRepo.save(profile);
        }
        throw new AccountNotFoundException("Account does not exist! id not present");
	}
    

}
