package com.churchspace.entity;


import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="subject")
public class Subject {

	@Id
	@Column(name = "id")
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer id;
	
	@Column(name = "subject")
	private String subject;
	
	@Column(name = "creatorName", nullable = false)
	private String creatorName;
	
	@Column(name = "active",nullable = false)
	private Boolean active;
    
    public Subject() {
    	
    	active=true;
    	
    }

	public String getSubject() {
		return subject;
	}

	public void setSubject(String subject) {
		this.subject = subject;
	}

	public Boolean getActive() {
		return active;
	}

	public void setActive(Boolean active) {
		this.active = active;
	}

	public Integer getId() {
		return id;
	}

	public String getCreatorName() {
		return creatorName;
	}

	public void setCreatorId(String creatorName) {
		this.creatorName = creatorName;
	}

	@Override
	public String toString() {
		return "Subject [id=" + id + ", subject=" + subject + ", creatorName=" + creatorName + ", active=" + active
				+"]";
	}
	
}
