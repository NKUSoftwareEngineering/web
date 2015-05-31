package com.nankai.version1.dao;

import com.nankai.version1.po.User;

public interface IUserDao {

	public abstract int insert(final User user);
	public abstract boolean selectByUserName(final String UserName);
	public abstract boolean selectByUserEmail(final String UserEmail);
	public abstract User selectByUserId(final int UserId);
	public abstract boolean selectByUserNameAndPassword(final String UserName,final String UserPassword);
	public abstract User selectByName(final String UserName);
}
