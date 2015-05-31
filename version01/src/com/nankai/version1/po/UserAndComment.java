package com.nankai.version1.po;

import java.io.Serializable;

public class UserAndComment implements Serializable {

	private User user;
	private Comment comment;
	public UserAndComment() {
		super();
		// TODO Auto-generated constructor stub
	}
	public UserAndComment(User user, Comment comment) {
		super();
		this.user = user;
		this.comment = comment;
	}
	public User getUser() {
		return user;
	}
	public void setUser(User user) {
		this.user = user;
	}
	public Comment getComment() {
		return comment;
	}
	public void setComment(Comment comment) {
		this.comment = comment;
	}
	@Override
	public String toString() {
		return "UserAndComment [user=" + user + ", comment=" + comment + "]";
	}
	
	
}
