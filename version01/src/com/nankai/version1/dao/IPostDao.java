package com.nankai.version1.dao;

import java.util.List;

import com.nankai.version1.po.Post;

public interface IPostDao {

	public abstract Post selectPostById(final int postId);

	public abstract int addPost(Post post); 
	public abstract List<Post> selectPostByCityId(final int CityId);
	public abstract int selectUserIdByPostId(final int postId);
	public abstract List<Post> selectPostByUserId(final int UserId);
}
