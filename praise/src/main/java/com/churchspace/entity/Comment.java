package com.churchspace.entity;

import java.time.LocalDate;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

@Entity
@Table(name="comment")
public class Comment {
	
	@Id
	@Column(name = "id")
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer id;
	
	@Column(name = "comment", nullable = false)
	private String comment;
	
	@Column(name = "creator_name", nullable = false)
	private String creatorName;
	
	@Column(name = "comment_date", nullable = false)
	private LocalDate commentDate;
	
	@Column(name = "post_id")
	private Integer postId;
	
	@Column(name = "active",nullable = false)
	private Boolean active;
	

	public Comment() {
	   	commentDate=LocalDate.now();
    	active=true;
	}
	
	

	public Integer getPostId() {
		return postId;
	}



	public void setPostId(Integer postId) {
		this.postId = postId;
	}



	public String getComment() {
		return comment;
	}

	public void setComment(String comment) {
		this.comment = comment;
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
	
	

	public LocalDate getCommentDate() {
		return commentDate;
	}

	public void setCommentDate(LocalDate commentDate) {
		this.commentDate = commentDate;
	}

	public Boolean getActive() {
		return active;
	}

	public void setActive(Boolean active) {
		this.active = active;
	}



	@Override
	public String toString() {
		return "Comment [id=" + id + ", comment=" + comment + ", creatorName=" + creatorName + ", commentDate="
				+ commentDate + ", postId=" + postId + ", active=" + active + "]";
	}


	
	
	

}
