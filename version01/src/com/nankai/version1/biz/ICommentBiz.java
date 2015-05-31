package com.nankai.version1.biz;

import java.util.List;

import com.nankai.version1.po.Comment;

public interface ICommentBiz {

	public abstract List<Comment> showAllCommentById(final int PostId);
	public abstract int insertComment(final Comment comment);
}
