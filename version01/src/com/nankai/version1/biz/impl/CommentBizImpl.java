package com.nankai.version1.biz.impl;

import java.util.List;

import com.nankai.version1.biz.ICommentBiz;
import com.nankai.version1.dao.ICommentDao;
import com.nankai.version1.dao.impl.CommentDaoImpl;
import com.nankai.version1.po.Comment;

public class CommentBizImpl implements ICommentBiz {

	private ICommentDao commentDao = null;
	
	
	public CommentBizImpl() {
		super();
		// TODO Auto-generated constructor stub
		this.commentDao = new CommentDaoImpl();
	}

	@Override
	public List<Comment> showAllCommentById(int PostId) {
		// TODO Auto-generated method stub
		return this.commentDao.selectAllCommentById(PostId);
	}

	@Override
	public int insertComment(Comment comment) {
		// TODO Auto-generated method stub
		return this.commentDao.addComment(comment);
	}

}
