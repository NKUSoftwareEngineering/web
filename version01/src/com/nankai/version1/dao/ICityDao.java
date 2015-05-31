package com.nankai.version1.dao;

import com.nankai.version1.po.City;

public interface ICityDao {

	public abstract City selectCityByCityId(final int CityId);
}
