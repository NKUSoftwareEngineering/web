package com.nankai.version1.biz.impl;

import java.util.List;

import com.nankai.version1.biz.IPostBiz;
import com.nankai.version1.dao.IPostDao;
import com.nankai.version1.dao.impl.PostDaoImpl;
import com.nankai.version1.po.Post;

public class PostBizImpl implements IPostBiz {

	private IPostDao postDao = null;
	
	
	public PostBizImpl() {
		super();
		// TODO Auto-generated constructor stub
		this.postDao = new PostDaoImpl();
	}


	@Override
	public Post showPostById(int postId) {
		// TODO Auto-generated method stub
		return this.postDao.selectPostById(postId);
	}


	@Override
	public int insertPost(Post post) {
		// TODO Auto-generated method stub
		return this.postDao.addPost(post);
	}


	@Override
	public List<Post> showPostByCityId(int CityId) {
		// TODO Auto-generated method stub
		return this.postDao.selectPostByCityId(CityId);
	}


	@Override
	public int getUserIdByPostId(int PostId) {
		// TODO Auto-generated method stub
		return this.postDao.selectUserIdByPostId(PostId);
	}


	@Override
	public List<Post> showPostByUserId(int UserId) {
		// TODO Auto-generated method stub
		return this.postDao.selectPostByUserId(UserId);
	}

}
