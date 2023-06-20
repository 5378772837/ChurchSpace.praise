package com.churchspace.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.churchspace.entity.Subject;
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
	
	public List<Topic> save(Topic topic) throws Exception {	
		System.out.println(topic);
	    topicRepo.save(topic);
	    return topicRepo.findActiveBySubjectId(topic.getSubjectId());

	}
	
	public List<Topic> findTopicByTopic(String text){
		List<Topic> topics = topicRepo.findTopicByTopic(text);
		return topics;
	}

}
