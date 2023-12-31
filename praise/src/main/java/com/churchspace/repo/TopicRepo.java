package com.churchspace.repo;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import com.churchspace.entity.Topic;

@Repository
public interface TopicRepo extends JpaRepository<Topic, Integer>{
	
    @Query(value="select * from topic where subject_id = ?1", nativeQuery = true)
    public List<Topic> findActiveBySubjectId(Integer subjectId);

    @Query(value="select * from topic where topic_blog LIKE ?1", nativeQuery = true)
    public List<Topic> findTopicByTopic(String text);
    
}
