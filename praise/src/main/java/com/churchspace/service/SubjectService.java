package com.churchspace.service;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.churchspace.entity.Subject;
import com.churchspace.repo.SubjectRepo;

@Service
public class SubjectService {

	@Autowired
	SubjectRepo subjectRepo;
	
	public Optional<Subject> findActive(){
		Optional <Subject> subjects = subjectRepo.findActive();
		return subjects;
	}
	
	
}
