package com.churchspace.repo;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.churchspace.entity.HomeImage;


@Repository
public  interface HomeImageRepo extends JpaRepository<HomeImage, Integer> {
	
	
	@Query(value="select * from home_image where active = true and description = 'Home Page Slides'", nativeQuery = true)
	public List<HomeImage> findActiveSlides();

	@Query(value="select * from home_image where description = 'Home Page Slides'", nativeQuery = true)
	public List<HomeImage> findAllSlides();

	@Query(value="select * from home_image where description = 'Site Background'", nativeQuery = true)
	public List<HomeImage> findBackground();

	@Query(value="select * from home_image where description = 'Header Logo'", nativeQuery = true)
	public List<HomeImage> findHeader();

}
