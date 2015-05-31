package com.nankai.version1.po;

import java.io.Serializable;

public class UserAndPost implements Serializable {

	private User user;
	private Post post;
	public UserAndPost() {
		super();
		// TODO Auto-generated constructor stub
	}
	public UserAndPost(User user, Post post) {
		super();
		this.user = user;
		this.post = post;
	}
	public User getUser() {
		return user;
	}
	public void setUser(User user) {
		this.user = user;
	}
	public Post getPost() {
		return post;
	}
	public void setPost(Post post) {
		this.post = post;
	}
	@Override
	public String toString() {
		return "UserAndPost [user=" + user + ", post=" + post + "]";
	}
	
	
}
