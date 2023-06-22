package com.churchspace.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.churchspace.entity.Comment;
import com.churchspace.entity.Subject;
import com.churchspace.repo.CommentRepo;

@Service
public class CommentService {
	
	@Autowired
	CommentRepo commentRepo;
	
	public List<Comment> findActiveByPostId(Integer postId){
	List<Comment> activeComments = commentRepo.findActiveByPostId(postId);
	return activeComments;
	}
	
	public List<Comment> save(Comment comment) throws Exception {	
		System.out.println(comment);
	    commentRepo.save(comment);
	    return commentRepo.findActiveByPostId(comment.getPostId());

	}
	
	public List<Comment> findCommentByComment(String text){
		List<Comment> comments = commentRepo.findCommentByComment(text);
		return comments;
	}

}
