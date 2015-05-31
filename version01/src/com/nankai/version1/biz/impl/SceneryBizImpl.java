package com.nankai.version1.biz.impl;

import java.util.List;

import com.nankai.version1.biz.ISceneryBiz;
import com.nankai.version1.dao.ISceneryDao;
import com.nankai.version1.dao.impl.SceneryDaoImpl;
import com.nankai.version1.po.Scenery;

public class SceneryBizImpl implements ISceneryBiz {

	
	private ISceneryDao sceneryDao = null;
	
	
	public SceneryBizImpl() {
		super();
		// TODO Auto-generated constructor stub
		this.sceneryDao = new SceneryDaoImpl();
	}


	@Override
	public List<Scenery> showAllSceneryByCityId(int CityId) {
		// TODO Auto-generated method stub
		return this.sceneryDao.selectAllSceneryByCityId(CityId);
	}

}
