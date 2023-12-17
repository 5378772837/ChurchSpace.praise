package com.churchspace.repo;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.churchspace.entity.Comment;

@Repository
public interface CommentRepo extends JpaRepository<Comment, Integer>{
	
    @Query(value="select * from comment where post_id = ?1", nativeQuery = true)
    public List<Comment> findActiveByPostId(Integer postID);
    
    @Query(value="select * from comment where comment LIKE ?1", nativeQuery = true)
    public List<Comment> findCommentByComment(String text);

}
