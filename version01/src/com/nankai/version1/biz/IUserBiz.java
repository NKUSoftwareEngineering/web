package com.nankai.version1.biz;

import com.nankai.version1.po.User;

public interface IUserBiz {

	public abstract int add(final User user);
	
	public abstract int login(String name,String password);
	public abstract User showUserById(final int UserId);
	public abstract User showUserByName(final String UserName);
}
