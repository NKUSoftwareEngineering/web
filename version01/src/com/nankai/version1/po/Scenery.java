package com.nankai.version1.po;

import java.io.Serializable;

public class Scenery implements Serializable {

	private int SceneryId;
	private int CityId;
	private String SceneryName;
	private String SceneryIntroduction;
	private String SceneryPhoto;
	public Scenery() {
		super();
		// TODO Auto-generated constructor stub
	}
	public Scenery(int sceneryId, int cityId, String sceneryName,
			String sceneryIntroduction, String sceneryPhoto) {
		super();
		SceneryId = sceneryId;
		CityId = cityId;
		SceneryName = sceneryName;
		SceneryIntroduction = sceneryIntroduction;
		SceneryPhoto = sceneryPhoto;
	}
	public int getSceneryId() {
		return SceneryId;
	}
	public void setSceneryId(int sceneryId) {
		SceneryId = sceneryId;
	}
	public int getCityId() {
		return CityId;
	}
	public void setCityId(int cityId) {
		CityId = cityId;
	}
	public String getSceneryName() {
		return SceneryName;
	}
	public void setSceneryName(String sceneryName) {
		SceneryName = sceneryName;
	}
	public String getSceneryIntroduction() {
		return SceneryIntroduction;
	}
	public void setSceneryIntroduction(String sceneryIntroduction) {
		SceneryIntroduction = sceneryIntroduction;
	}
	public String getSceneryPhoto() {
		return SceneryPhoto;
	}
	public void setSceneryPhoto(String sceneryPhoto) {
		SceneryPhoto = sceneryPhoto;
	}
	@Override
	public String toString() {
		return "Scenery [SceneryId=" + SceneryId + ", CityId=" + CityId
				+ ", SceneryName=" + SceneryName + ", SceneryIntroduction="
				+ SceneryIntroduction + ", SceneryPhoto=" + SceneryPhoto + "]";
	}
	
}
