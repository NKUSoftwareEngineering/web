package com.nankai.version1.dao;

import java.util.List;

import com.nankai.version1.po.Scenery;

public interface ISceneryDao {

	public abstract List<Scenery> selectAllSceneryByCityId(final int CityId);
}
