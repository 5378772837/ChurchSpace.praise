package com.churchspace.entity;


import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

import java.time.LocalDate;

@Entity
@Table(name="topic")
public class Topic {
	
	@Id
	@Column(name = "id")
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer id;
	
	@Column(name = "topic_title", nullable = false)
	private String topicTitle;
	
	@Column(name = "topic_blog", nullable = false)
	private String topicBlog;
	
	@Column(name = "creator_name", nullable = false)
	private String creatorName;
	
	@Column(name = "topic_date", nullable = false)
	private LocalDate topicDate;
	
	@Column(name = "active",nullable = false)
	private Boolean active;
	
    @Column(name = "subject_id")
    private Integer subjectId;
	
    
    public Topic() {
    	topicDate=LocalDate.now();
    	active=true;
    }

	public String getTopicTitle() {
		return topicTitle;
	}

	public void setTopicTitle (String topicTitle) {
		this.topicTitle = topicTitle;
	}
	
	public String getTopicBlog() {
		return topicBlog;
	}

	public void setTopicBlog(String topicBlog) {
		this.topicBlog = topicBlog;
	}

	public Integer getSubjectId() {
		return subjectId;
	}

	public void setSubjectId(Integer subjectId) {
		this.subjectId = subjectId;
	}

	public String getTopic() {
		return topicBlog;
	}

	public void setTopic(String topicBlog) {
		this.topicBlog = topicBlog;
	}

	public String getCreatorName() {
		return creatorName;
	}

	public void setCreatorName(String creatorName) {
		this.creatorName = creatorName;
	}

	public Integer getId() {
		return id;
	}

	public LocalDate getTopicDate() {
		return topicDate;
	}

	public void setTopicDate(LocalDate topicDate) {
		this.topicDate = topicDate;
	}

	public Boolean getActive() {
		return active;
	}

	public void setActive(Boolean active) {
		this.active = active;
	}

	@Override
	public String toString() {
		return "Topic [id=" + id + ", topicTitle=" + topicTitle + ", topicBlog=" + topicBlog + ", creatorName="
				+ creatorName + ", topicDate=" + topicDate + ", active=" + active + ", subjectId=" + subjectId + "]";
	}

    
}
