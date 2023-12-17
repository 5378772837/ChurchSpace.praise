package com.churchspace.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.churchspace.entity.Link;
import com.churchspace.repo.LinkRepo;

@Service
public class LinkService {

	@Autowired
	LinkRepo linkRepo;
	
	public void save(Link link) throws Exception {	
	    linkRepo.save(link);

	}
	
	public List<Link>findAll(){	
	   return  linkRepo.findAll();

	}
	
	public List<Link> findActive(){
		List <Link> links = linkRepo.findActive();
		return links;
	}

	public void update(Link link) throws Exception{
		if(link.getId() != null) {
		    linkRepo.save(link);
		    }
		    throw new Exception("Home Image does not exist! id not present");
		
	}
}
	