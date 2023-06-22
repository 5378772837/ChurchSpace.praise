package com.churchspace.repo;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.churchspace.entity.Post;
import com.churchspace.entity.Subject;


public interface PostRepo extends JpaRepository<Post, Integer> {
	
    @Query(value="select * from post where topic_id = ?1", nativeQuery = true)
    public List<Post> findActiveByTopicId(Integer topicId);
    
    @Query(value="select * from post where post LIKE ?1", nativeQuery = true)
    public List<Post> findPostByPost(String text);

}
