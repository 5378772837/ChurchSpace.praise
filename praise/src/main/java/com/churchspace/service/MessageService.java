package com.churchspace.service;

import java.util.List;
import java.util.Optional;

import javax.security.auth.login.AccountNotFoundException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.churchspace.entity.Message;
import com.churchspace.repo.MessageRepo;

@Service
public class MessageService {

	@Autowired
	MessageRepo messageRepo;
	
	public List<Message> findActive(){
		List <Message> messages = messageRepo.findActive();
		return messages;
	}
	
	public List<Message> findActiveForUser(String recipientName){
		List <Message> messages = messageRepo.findActiveForUser(recipientName);
		return messages;
	}
	
	public List<Message> findMessageByMessage(String text){
		List<Message> messages = messageRepo.findMessageByMessage(text);
		return messages;
	}
	
	
	public void update(Message message) throws Exception {	
	    if(message.getId() != null) {
	    messageRepo.save(message);
	    }
	    throw new Exception("Message does not exist! id not present");
	}
	
	
	
	public void save(Message message) throws Exception {	
	    messageRepo.save(message);

	}
}
