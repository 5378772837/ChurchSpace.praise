package com.churchspace.repo;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import com.churchspace.entity.User;

@Repository  
public interface UserRepo extends JpaRepository<User, Integer> {
	
    @Query(value="select * from user where email LIKE ?1", nativeQuery = true)
    public List<User> findByEmail(String email);
    
    @Query(value="select * from user where email = ?1", nativeQuery = true)
    public User findMeByEmail(String email);
    
    Optional <User> findByUsername(String username);
    
    Boolean existsByUsername(String username);

    Boolean existsByEmail(String email);
}
