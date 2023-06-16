package com.churchspace.repo;

import org.springframework.data.jpa.repository.JpaRepository;

import com.churchspace.entity.UserProfile;

public interface UserProfileRepo extends JpaRepository <UserProfile, Integer>{

	
	
}
