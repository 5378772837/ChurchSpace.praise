package com.churchspace.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.churchspace.entity.Post;
import com.churchspace.repo.PostRepo;

@Service
public class PostService {
	
	@Autowired
	PostRepo postRepo;
	
	public List<Post> findActiveByTopicId(Integer topicId){
	List<Post> activeTopics = postRepo.findActiveByTopicId(topicId);
	return activeTopics;
	}
	
	public List<Post> save(Post post) throws Exception {	
		System.out.println(post);
	    postRepo.save(post);
	    return postRepo.findActiveByTopicId(post.getTopicID());

	}

	public List<Post> findPostByPost(String text){
		List<Post> posts = postRepo.findPostByPost(text);
		return posts;
	}
	
}
