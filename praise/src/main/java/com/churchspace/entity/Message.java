package com.churchspace.entity;

import java.time.LocalDate;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="message")
public class Message {

	@Id
	@Column(name = "id")
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer id;
	
	@Column(name = "subject")
	private String subject;
	
	@Column(name = "message")
	private String message;
	
	@Column(name = "message_date")
	private LocalDate messageDate;
	
	@Column(name = "sender_name")
	private String senderName;
	
	@Column(name = "recipient_name")
	private String recipientName;
	
	@Column(name = "is_read")
	private Boolean isRead;
	
	@Column(name = "active")
	private Boolean active;

	public Message() {
	   	messageDate=LocalDate.now();
		this.isRead=false;
	}
	

	public Boolean getActive() {
		return active;
	}

	public void setActive(Boolean active) {
		this.active = active;
	}



	public String getSubject() {
		return subject;
	}

	public void setSubject(String subject) {
		this.subject = subject;
	}

	public String getMessage() {
		return message;
	}

	public void setMessage(String message) {
		this.message = message;
	}

	public String getSenderName() {
		return senderName;
	}

	public void setSenderName(String senderName) {
		this.senderName = senderName;
	}

	public String getRecipientName() {
		return recipientName;
	}

	public void setRecipientName(String recipientName) {
		this.recipientName = recipientName;
	}

	public Boolean getIsRead() {
		return isRead;
	}

	public void setIsRead(Boolean isRead) {
		this.isRead = isRead;
	}

	public Integer getId() {
		return id;
	}
	
	public LocalDate getMessageDate() {
		return messageDate;
	}

	public void setMessageDate(LocalDate messageDate) {
		this.messageDate = messageDate;
	}

	@Override
	public String toString() {
		return "Message [id=" + id + ", senderName=" + senderName + ", recipientName=" + recipientName + ", subject="
				+ subject + ", message=" + message + ", read=" + isRead + "]";
	}
	
	
	
	
}
