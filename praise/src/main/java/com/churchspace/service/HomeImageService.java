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

	public List<HomeImage> findBackground(){
		List <HomeImage> images = homeImageRepo.findBackground();
		return images;
	}
	
	public List<HomeImage> findHeader(){
		List <HomeImage> images = homeImageRepo.findHeader();
		return images;
	}
	
	public List<HomeImage> findAllSlides(){
		List <HomeImage> images = homeImageRepo.findAllSlides();
		return images;
	}
	
	public List<HomeImage> findActiveSlides(){
		List <HomeImage> images = homeImageRepo.findActiveSlides();
		return images;
	}
	
	public void update(HomeImage photo) throws Exception{
		if(photo.getId() != null) {
		    homeImageRepo.save(photo);
		    }
		    throw new Exception("Home Image does not exist! id not present");
		
	}
	
}
