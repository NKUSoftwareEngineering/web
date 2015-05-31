package com.nankai.version1.dao.impl;

import java.sql.Connection;
import java.sql.ResultSet;
import java.sql.SQLException;

import com.nankai.version1.dao.IUserDao;
import com.nankai.version1.po.User;
import com.nankai.version1.utils.db.ConnectionManager;
import com.nankai.version1.utils.db.DBUtils;
import com.nankai.version1.utils.db.TransactionManager;

public class UserDaoImpl implements IUserDao {

	private DBUtils dbUtils = null;
	private Connection conn;
	private ConnectionManager connectionManager;
	
	public UserDaoImpl() {
		super();
		// TODO Auto-generated constructor stub
		this.connectionManager = new ConnectionManager();
		this.dbUtils = new DBUtils();
	}


	@Override
	public int insert(User user) {
		// TODO Auto-generated method stub
		this.conn = connectionManager.openConnection();
		TransactionManager.conn = this.conn;
		TransactionManager.beginTransaction();
		String UserName = user.getUserName();
		String UserPassword = user.getUserPassword();
		String UserEmail = user.getUserEmail();
		
		String strSQL = "insert into user values(null,?,?,?)";
		
		Object[] params = new Object[]{
				UserName,UserPassword,UserEmail
		};
		int affectRows = this.dbUtils.execOthers(conn, strSQL, params);
		if(affectRows>0)
		{
			TransactionManager.commit();
		}else{
			TransactionManager.rollback();
		}
		return affectRows;
	}
	
	public boolean selectByUserName(String UserName)
	{
		this.conn = connectionManager.openConnection();
		TransactionManager.conn = this.conn;
		TransactionManager.beginTransaction();
		
		String strSQL = "select * from User where UserName = ?";
		Object[] params = new Object[]{UserName};
		
		ResultSet resultSet = this.dbUtils.execQuery(conn, strSQL, params);
		try {
			while(resultSet.next())
			{
				return true;
			}
			return false;
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
			return false;
		}	
	}
	
	public boolean selectByUserEmail(String UserEmail)
	{
		this.conn = connectionManager.openConnection();
		TransactionManager.conn = this.conn;
		TransactionManager.beginTransaction();
		
		String strSQL = "select * from User where UserEmail = ?";
		Object[] params = new Object[]{UserEmail};
		
		ResultSet resultSet = this.dbUtils.execQuery(conn, strSQL, params);
		try {
			while(resultSet.next())
			{
				return true;
			}
			return false;
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
			return false;
		}
	}

	@Override
	public boolean selectByUserNameAndPassword(String UserName,
			String UserPassword) {
		// TODO Auto-generated method stub
		this.conn = connectionManager.openConnection();
		TransactionManager.conn = this.conn;
		TransactionManager.beginTransaction();
		
		String strSQL = "SELECT * FROM User where UserName = ? and UserPassWord = ?";
		Object[] params = new Object[]{UserName,UserPassword};
		
		ResultSet resultSet = this.dbUtils.execQuery(conn, strSQL, params);
		try {
			while(resultSet.next())
			{
				return true;
			}
			return false;
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
			return false;
		}
	}


	@Override
	public User selectByUserId(int UserId) {
		// TODO Auto-generated method stub
		this.conn = connectionManager.openConnection();
		TransactionManager.conn = this.conn;
		TransactionManager.beginTransaction();
		String strSQL = "select * from user where userid = ?";
		Object[] params = new Object[]{UserId};
		ResultSet resultSet = this.dbUtils.execQuery(conn, strSQL, params);
		try {
			if(resultSet.next())
			{
				User user = new User();
				user.setUserId(resultSet.getInt(1));
				user.setUserName(resultSet.getString(2));
				user.setUserPassword(resultSet.getString(3));
				user.setUserEmail(resultSet.getString(4));
				return user;
			}
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return null;
	}


	@Override
	public User selectByName(String UserName) {
		// TODO Auto-generated method stub
		this.conn = connectionManager.openConnection();
		TransactionManager.conn = this.conn;
		TransactionManager.beginTransaction();
		
		String strSQL = "select * from User where UserName = ?";
		Object[] params = new Object[]{UserName};
		
		ResultSet resultSet = this.dbUtils.execQuery(conn, strSQL, params);
		try {
			while(resultSet.next())
			{
				User user = new User();
				user.setUserId(resultSet.getInt(1));
				user.setUserName(resultSet.getString(2));
				user.setUserPassword(resultSet.getString(3));
				user.setUserEmail(resultSet.getString(4));
				return user;
			}
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}	
		return null;
	}
}
