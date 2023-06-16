package com.churchspace.repo;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.churchspace.entity.Subject;
import com.churchspace.entity.User;

@Repository
public interface SubjectRepo extends JpaRepository<Subject, Integer> {
	
    @Query(value="select * from subject where active = true", nativeQuery = true)
    public Optional<Subject> findActive();

}
