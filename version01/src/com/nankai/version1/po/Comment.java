package com.nankai.version1.po;

import java.io.Serializable;

public class Comment implements Serializable {

	private int CommentId;
	private int PostId;
	private String CommentContent;
	private String CommentTime;
	private int UserId;
	public Comment() {
		super();
		// TODO Auto-generated constructor stub
	}
	public Comment(int commentId, int postId, String commentContent,
			String commentTime, int userId) {
		super();
		CommentId = commentId;
		PostId = postId;
		CommentContent = commentContent;
		CommentTime = commentTime;
		UserId = userId;
	}
	public int getCommentId() {
		return CommentId;
	}
	public void setCommentId(int commentId) {
		CommentId = commentId;
	}
	public int getPostId() {
		return PostId;
	}
	public void setPostId(int postId) {
		PostId = postId;
	}
	public String getCommentContent() {
		return CommentContent;
	}
	public void setCommentContent(String commentContent) {
		CommentContent = commentContent;
	}
	public String getCommentTime() {
		return CommentTime;
	}
	public void setCommentTime(String commentTime) {
		CommentTime = commentTime;
	}
	public int getUserId() {
		return UserId;
	}
	public void setUserId(int userId) {
		UserId = userId;
	}
	@Override
	public String toString() {
		return "Comment [CommentId=" + CommentId + ", PostId=" + PostId
				+ ", CommentContent=" + CommentContent + ", CommentTime="
				+ CommentTime + ", UserId=" + UserId + "]";
	}
	
	
	
	
}
