package com.nankai.version1.dao.impl;

import java.sql.Connection;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

import com.nankai.version1.dao.IPostDao;
import com.nankai.version1.po.Post;
import com.nankai.version1.utils.db.ConnectionManager;
import com.nankai.version1.utils.db.DBUtils;
import com.nankai.version1.utils.db.TransactionManager;

public class PostDaoImpl implements IPostDao {

	private DBUtils dbUtils = null;
	private Connection conn;
	private ConnectionManager connectionManager;
	
	
	
	public PostDaoImpl() {
		super();
		// TODO Auto-generated constructor stub
		this.connectionManager = new ConnectionManager();
		this.dbUtils = new DBUtils();
	}



	@Override
	public Post selectPostById(int postId) {
		// TODO Auto-generated method stub

		this.conn = connectionManager.openConnection();
		TransactionManager.conn = this.conn;
		TransactionManager.beginTransaction();
		
		String strSQL = "select * from Post where postId = ?";
		Object[] params = new Object[]{postId};
		ResultSet resultSet = this.dbUtils.execQuery(conn, strSQL, params);
		try {
			if(resultSet.next())
			{
				Post post = new Post();
				post.setPostId(resultSet.getInt(1));
				post.setUserId(resultSet.getInt(2));
				post.setPostTitle(resultSet.getString(3));
				post.setPostTime(resultSet.getString(4));
				post.setPostContent(resultSet.getString(5));
				post.setPostReNum(resultSet.getInt(6));
				post.setCityId(resultSet.getInt(7));
				return post;
			}else{
				return null;
			}
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
			return null;
		}
		
	}



	@Override
	public int addPost(Post post) {
		// TODO Auto-generated method stub
		
		this.conn = connectionManager.openConnection();
		TransactionManager.conn = this.conn;
		TransactionManager.beginTransaction();
		
		String strSQL = "insert into post value(null,?,?,?,?,?,?)";
		Object[] params = new Object[]{post.getUserId(),post.getPostTitle(),
				post.getPostTime(),post.getPostContent(),post.getPostReNum(),post.getCityId()
		};
		int affectRows = this.dbUtils.execOthers(conn, strSQL, params);
		if(affectRows>0){
			TransactionManager.commit();
			return 1;
		}else 
		{
			TransactionManager.rollback();
		}
			
		return 0;
	}



	@Override
	public List<Post> selectPostByCityId(int CityId) {
		// TODO Auto-generated method stub
		List<Post> lstPost = new ArrayList<Post>();
		
		this.conn = connectionManager.openConnection();
		TransactionManager.conn = this.conn;
		TransactionManager.beginTransaction();
		
		String strSQL = "select * from post where cityid = ?";
		Object[] params = new Object[]{CityId};
		ResultSet resultSet = this.dbUtils.execQuery(conn, strSQL, params);
		try {
			while(resultSet.next()){
				Post post = new Post();
				post.setPostId(resultSet.getInt(1));
				post.setUserId(resultSet.getInt(2));
				post.setPostTitle(resultSet.getString(3));
				post.setPostTime(resultSet.getString(4));
				post.setPostContent(resultSet.getString(5));
				post.setPostReNum(resultSet.getInt(6));
				post.setCityId(resultSet.getInt(7));
				
				lstPost.add(post);
			}
			return lstPost;
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return null;
	}



	@Override
	public int selectUserIdByPostId(int postId) {
		// TODO Auto-generated method stub
		this.conn = connectionManager.openConnection();
		TransactionManager.conn = this.conn;
		TransactionManager.beginTransaction();
		String strSQL = "select * from post where postid=?";
		Object[] params = new Object[]{postId};
		ResultSet resultSet = this.dbUtils.execQuery(conn, strSQL, params);
		try {
			if(resultSet.next())
			{
				return resultSet.getInt(2);
			}
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return -1;
	}



	@Override
	public List<Post> selectPostByUserId(int UserId) {
		// TODO Auto-generated method stub
List<Post> lstPost = new ArrayList<Post>();
		
		this.conn = connectionManager.openConnection();
		TransactionManager.conn = this.conn;
		TransactionManager.beginTransaction();
		
		String strSQL = "select * from post where UserId = ?";
		Object[] params = new Object[]{UserId};
		ResultSet resultSet = this.dbUtils.execQuery(conn, strSQL, params);
		try {
			while(resultSet.next()){
				Post post = new Post();
				post.setPostId(resultSet.getInt(1));
				post.setUserId(resultSet.getInt(2));
				post.setPostTitle(resultSet.getString(3));
				post.setPostTime(resultSet.getString(4));
				post.setPostContent(resultSet.getString(5));
				post.setPostReNum(resultSet.getInt(6));
				post.setCityId(resultSet.getInt(7));
				
				lstPost.add(post);
			}
			return lstPost;
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return null;
	}

	
}
