package com.nankai.version1.po;

import java.io.Serializable;

public class Post implements Serializable {

	private int PostId;
	private int UserId;
	private String PostTitle;
	private String PostTime;
	private String PostContent;
	private int PostReNum;
	private int CityId;
	public Post() {
		super();
		// TODO Auto-generated constructor stub
	}
	public Post(int postId, int userId, String postTitle, String postTime,
			String postContent, int postReNum, int cityId) {
		super();
		PostId = postId;
		UserId = userId;
		PostTitle = postTitle;
		PostTime = postTime;
		PostContent = postContent;
		PostReNum = postReNum;
		CityId = cityId;
	}
	public int getPostId() {
		return PostId;
	}
	public void setPostId(int postId) {
		PostId = postId;
	}
	public int getUserId() {
		return UserId;
	}
	public void setUserId(int userId) {
		UserId = userId;
	}
	public String getPostTitle() {
		return PostTitle;
	}
	public void setPostTitle(String postTitle) {
		PostTitle = postTitle;
	}
	public String getPostTime() {
		return PostTime;
	}
	public void setPostTime(String postTime) {
		PostTime = postTime;
	}
	public String getPostContent() {
		return PostContent;
	}
	public void setPostContent(String postContent) {
		PostContent = postContent;
	}
	public int getPostReNum() {
		return PostReNum;
	}
	public void setPostReNum(int postReNum) {
		PostReNum = postReNum;
	}
	public int getCityId() {
		return CityId;
	}
	public void setCityId(int cityId) {
		CityId = cityId;
	}
	@Override
	public String toString() {
		return "Post [PostId=" + PostId + ", UserId=" + UserId + ", PostTitle="
				+ PostTitle + ", PostTime=" + PostTime + ", PostContent="
				+ PostContent + ", PostReNum=" + PostReNum + ", CityId="
				+ CityId + "]";
	}
	
	
}
