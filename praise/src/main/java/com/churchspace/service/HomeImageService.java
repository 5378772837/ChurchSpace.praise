package com.churchspace.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.churchspace.entity.HomeImage;
import com.churchspace.repo.HomeImageRepo;

@Service
public class HomeImageService {

	@Autowired
	HomeImageRepo homeImageRepo;
	
	public void save(HomeImage photo) throws Exception {	
	    homeImageRepo.save(photo);

	}
	
	public List<HomeImage>findAll(){	
	   return  homeImageRepo.findAll();

	}
	
	public List<HomeImage> findActive(){
		List <HomeImage> images = homeImageRepo.findActive();
		return images;
	}

	public void update(HomeImage photo) throws Exception{
		if(photo.getId() != null) {
		    homeImageRepo.save(photo);
		    }
		    throw new Exception("Home Image does not exist! id not present");
		
	}
	
}
