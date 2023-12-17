package com.churchspace.repo;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.churchspace.entity.Link;

@Repository
public  interface LinkRepo extends JpaRepository<Link, Integer> {
	
	
    @Query(value="select * from home_image where active = true", nativeQuery = true)
    public List<Link> findActive();
}