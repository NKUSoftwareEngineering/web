package com.nankai.version1.biz.impl;

import com.nankai.version1.biz.ICityBiz;
import com.nankai.version1.dao.ICityDao;
import com.nankai.version1.dao.impl.CityDaoImpl;
import com.nankai.version1.po.City;

public class CityBizImpl implements ICityBiz {

	private ICityDao cityDao = null;
	
	public CityBizImpl() {
		super();
		// TODO Auto-generated constructor stub
		this.cityDao = new CityDaoImpl();
	}

	@Override
	public City showCityByCityId(int CityId) {
		// TODO Auto-generated method stub
		return this.cityDao.selectCityByCityId(CityId);
	}

}
