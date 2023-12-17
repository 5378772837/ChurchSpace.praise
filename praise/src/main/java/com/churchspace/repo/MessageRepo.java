package com.churchspace.repo;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.churchspace.entity.Message;


@Repository
public interface MessageRepo extends JpaRepository<Message, Integer> {
	
    @Query(value="select * from message where active = true", nativeQuery = true)
    public List<Message> findActive();
    
    @Query(value="select * from message where active = true AND recipient_name LIKE ?1", nativeQuery = true)
    public List<Message> findActiveForUser(String recipientName);
    
    @Query(value="select * from message where message LIKE ?1", nativeQuery = true)
    public List<Message> findMessageByMessage(String text);
    

}
