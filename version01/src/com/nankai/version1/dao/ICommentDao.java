package com.nankai.version1.dao;

import java.util.List;

import com.nankai.version1.po.Comment;

public interface ICommentDao {

	public abstract List<Comment> selectAllCommentById(final int PostId);

	public abstract int addComment(Comment comment);
}
