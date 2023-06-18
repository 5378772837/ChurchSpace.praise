package com.churchspace.service;

import java.util.List;
import java.util.Optional;

import javax.security.auth.login.AccountNotFoundException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.churchspace.entity.Subject;
import com.churchspace.repo.SubjectRepo;

@Service
public class SubjectService {

	@Autowired
	SubjectRepo subjectRepo;
	
	public List<Subject> findActive(){
		List <Subject> subjects = subjectRepo.findActive();
		return subjects;
	}
	
	
	
	public List<Subject> findSubjectBySubject(String text){
		List<Subject> subjects = subjectRepo.findSubjectBySubject(text);
		return subjects;
	}
	
	
	public void update(Subject subject) throws Exception {	
	    if(subject.getId() != null) {
	    subjectRepo.save(subject);
	    }
	    throw new Exception("Subject does not exist! id not present");
	}
	
	
	
	public void save(Subject subject) throws Exception {	
	    subjectRepo.save(subject);

	}
}
