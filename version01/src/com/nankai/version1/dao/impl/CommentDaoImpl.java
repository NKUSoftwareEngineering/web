package com.nankai.version1.dao.impl;

import java.sql.Connection;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

import com.nankai.version1.dao.ICommentDao;
import com.nankai.version1.po.Comment;
import com.nankai.version1.utils.db.ConnectionManager;
import com.nankai.version1.utils.db.DBUtils;
import com.nankai.version1.utils.db.TransactionManager;

public class CommentDaoImpl implements ICommentDao {

	private DBUtils dbUtils = null;
	private Connection conn;
	private ConnectionManager connectionManager;
	
	
	public CommentDaoImpl() {
		super();
		// TODO Auto-generated constructor stub
		this.connectionManager = new ConnectionManager();
		this.dbUtils = new DBUtils();
	}

	@Override
	public List<Comment> selectAllCommentById(int PostId) {
		// TODO Auto-generated method stub
		List<Comment> commentList = new ArrayList<Comment>();
		
		this.conn = connectionManager.openConnection();
		TransactionManager.conn = this.conn;
		TransactionManager.beginTransaction();
		
		String strSQL = "select * from comment where postid = ?";
		Object[] params = new Object[]{PostId};
		ResultSet resultSet = this.dbUtils.execQuery(conn, strSQL, params);
		try {
			while(resultSet.next())
			{
				Comment comment = new Comment();
				comment.setCommentId(resultSet.getInt(1));
				comment.setPostId(resultSet.getInt(2));
				comment.setCommentContent(resultSet.getString(3));
				comment.setCommentTime(resultSet.getString(4));
				comment.setUserId(resultSet.getInt(5));
				commentList.add(comment);
				System.out.println(comment.toString());
			}
			return commentList;
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		
		return null;
	}

	@Override
	public int addComment(Comment comment) {
		// TODO Auto-generated method stub
		this.conn = connectionManager.openConnection();
		TransactionManager.conn = this.conn;
		TransactionManager.beginTransaction();
		
		String strSQL = "insert into comment value(null,?,?,?,?)";
		Object[] params = new Object[]
				{
					comment.getPostId(),comment.getCommentContent(),
					comment.getCommentTime(),comment.getUserId()
				};
		System.out.println(params);
		int affectRows = this.dbUtils.execOthers(conn, strSQL, params);
		if(affectRows>0){
			System.out.println("insert ok");
			TransactionManager.commit();
			return 1;
		}else{
			TransactionManager.rollback();
		}
		return 0;
	}

}
