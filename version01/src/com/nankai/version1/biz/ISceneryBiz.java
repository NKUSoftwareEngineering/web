package com.nankai.version1.biz;

import java.util.List;

import com.nankai.version1.po.Scenery;

public interface ISceneryBiz {

	public abstract List<Scenery> showAllSceneryByCityId(final int CityId);
}
