package com.churchspace.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="link")
public class Link {
	
	@Id
	@Column(name = "id")
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer id;
	
	@Column(name = "link_name")
	private String linkName;

	@Column(name = "link_Desc")
	private String linkDescription;
	
	@Column(name = "photo_url")
	private String photoUrl;
	
	@Column(name = "link_address")
	private String linkAddress;
	
	@Column(name = "active")
	private Boolean active;

	public String getLinkName() {
		return linkName;
	}

	public void setLinkName(String linkName) {
		this.linkName = linkName;
	}

	public String getLinkDescription() {
		return linkDescription;
	}

	public void setLinkDescription(String linkDescription) {
		this.linkDescription = linkDescription;
	}

	public String getPhotoUrl() {
		return photoUrl;
	}

	public void setPhotoUrl(String photoUrl) {
		this.photoUrl = photoUrl;
	}

	public String getLinkAddress() {
		return linkAddress;
	}

	public void setLinkAddress(String linkAddress) {
		this.linkAddress = linkAddress;
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

	@Override
	public String toString() {
		return "Link [id=" + id + ", linkName=" + linkName + ", linkDescription=" + linkDescription + ", photoUrl="
				+ photoUrl + ", linkAddress=" + linkAddress + ", active=" + active + "]";
	}
	
	

}
