package com.churchspace.repo;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.churchspace.entity.HomeImage;


@Repository
public  interface HomeImageRepo extends JpaRepository<HomeImage, Integer> {
	
	
    @Query(value="select * from home_image where active = true", nativeQuery = true)
    public List<HomeImage> findActive();
    

}
