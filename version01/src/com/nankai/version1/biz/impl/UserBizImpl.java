package com.nankai.version1.biz.impl;

import com.nankai.version1.biz.IUserBiz;
import com.nankai.version1.dao.IUserDao;
import com.nankai.version1.dao.impl.UserDaoImpl;
import com.nankai.version1.po.User;

public class UserBizImpl implements IUserBiz {

	private IUserDao userDao = null;
	
	public UserBizImpl() {
		super();
		// TODO Auto-generated constructor stub
		this.userDao = new UserDaoImpl();
	}

	@Override
	public int add(User user) {
		// TODO Auto-generated method stub
		boolean name = this.userDao.selectByUserName(user.getUserName());
		
		if(name == true)
		{
			return 0;
		}
		else
		{
			boolean email = this.userDao.selectByUserEmail(user.getUserEmail());
			if(email == true)
			{
				return 2;
			}
			return this.userDao.insert(user)>0?1:-1;
		}
			
	}
	
	public int login(String name,String password)
	{
		return this.userDao.selectByUserNameAndPassword(name, password)==true?1:-1;
	}

	@Override
	public User showUserById(int UserId) {
		// TODO Auto-generated method stub
		return this.userDao.selectByUserId(UserId);
	}

	@Override
	public User showUserByName(String UserName) {
		// TODO Auto-generated method stub
		return this.userDao.selectByName(UserName);
	}

}
