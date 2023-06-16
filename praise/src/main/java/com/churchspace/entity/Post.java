package com.churchspace.entity;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;

@Entity
@Table(name="post")
public class Post {
	
	@Id
	@Column(name = "id")
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer id;
	
	@Column(name = "post", nullable = false)
	private String post;
	
	@Column(name = "creator_name", nullable = false)
	private String creatorName;
	
	@Column(name = "post_date", nullable = false)
	private LocalDate postDate;
	
	@Column(name = "topic_ID", nullable = false)
	private Integer topicID;

	@Column(name = "active",nullable = false)
	private Boolean active;
	
    public Post () {
    	postDate=LocalDate.now();
    	active=true;
    	
    }
    
	public Integer getTopicID() {
		return topicID;
	}

	public void setTopicID(Integer topicID) {
		this.topicID = topicID;
	}

	public String getPost() {
		return post;
	}

	public void setPost(String post) {
		this.post = post;
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

	public LocalDate getPostDate() {
		return postDate;
	}

	public void setPostDate(LocalDate postDate) {
		this.postDate = postDate;
	}

	public Boolean getActive() {
		return active;
	}

	public void setActive(Boolean active) {
		this.active = active;
	}

	@Override
	public String toString() {
		return "Post [id=" + id + ", post=" + post + ", creatorName=" + creatorName + ", postDate=" + postDate
				+ ", topicID=" + topicID + ", active=" + active + "]";
	}

    
    

}
