package com.nankai.version1.po;

import java.io.Serializable;

public class User implements Serializable {

	private int UserId;
	private String UserName;
	private String UserPassword;
	private String UserEmail;
	
	public User(int userId, String userName, String userPassword,
			String userEmail) {
		super();
		UserId = userId;
		UserName = userName;
		UserPassword = userPassword;
		UserEmail = userEmail;
	}

	public User() {
		super();
		// TODO Auto-generated constructor stub
	}

	public int getUserId() {
		return UserId;
	}

	public void setUserId(int userId) {
		UserId = userId;
	}

	public String getUserName() {
		return UserName;
	}

	public void setUserName(String userName) {
		UserName = userName;
	}

	public String getUserPassword() {
		return UserPassword;
	}

	public void setUserPassword(String userPassword) {
		UserPassword = userPassword;
	}

	public String getUserEmail() {
		return UserEmail;
	}

	public void setUserEmail(String userEmail) {
		UserEmail = userEmail;
	}
	
	@Override
	public String toString() {
		return "User [UserId=" + UserId + ", UserName=" + UserName
				+ ", UserPassword=" + UserPassword + ", UserEmail=" + UserEmail
				+ "]";
	}
}
