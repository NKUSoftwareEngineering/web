package com.nankai.version1.biz;

import java.util.List;
import com.nankai.version1.po.Post;

public interface IPostBiz {

	public abstract Post showPostById(final int postId);
	public abstract int insertPost(final Post post);
	public abstract List<Post> showPostByCityId(final int CityId);
	public abstract int getUserIdByPostId(final int PostId);
	public abstract List<Post> showPostByUserId(final int UserId);
}
