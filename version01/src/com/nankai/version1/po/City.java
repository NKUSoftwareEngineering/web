package com.nankai.version1.po;

import java.io.Serializable;

public class City implements Serializable {

	private int CityId;
	private String CityName;
	private String CityIntroduction;
	private String CityPhoto;
	public City() {
		// TODO Auto-generated constructor stub
		super();
	}
	
	
	public City(int cityId, String cityName, String cityIntroduction,
			String cityPhoto) {
		super();
		CityId = cityId;
		CityName = cityName;
		CityIntroduction = cityIntroduction;
		CityPhoto = cityPhoto;
	}
	public int getCityId() {
		return CityId;
	}
	public void setCityId(int cityId) {
		CityId = cityId;
	}
	public String getCityName() {
		return CityName;
	}
	public void setCityName(String cityName) {
		CityName = cityName;
	}
	public String getCityIntroduction() {
		return CityIntroduction;
	}
	public void setCityIntroduction(String cityIntroduction) {
		CityIntroduction = cityIntroduction;
	}
	public String getCityPhoto() {
		return CityPhoto;
	}
	public void setCityPhoto(String cityPhoto) {
		CityPhoto = cityPhoto;
	}
	@Override
	public String toString() {
		return "City [CityId=" + CityId + ", CityName=" + CityName
				+ ", CityIntroduction=" + CityIntroduction + ", CityPhoto="
				+ CityPhoto + "]";
	}
	
	
}
