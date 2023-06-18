package com.churchspace.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.churchspace.entity.Topic;
import com.churchspace.repo.TopicRepo;

@Service
public class TopicService {
	
	@Autowired
	TopicRepo topicRepo;
	
	public List<Topic> findActiveBySubjectId(Integer subjectId){
	List<Topic> activeTopics = topicRepo.findActiveBySubjectId(subjectId);
	return activeTopics;
	}

}
