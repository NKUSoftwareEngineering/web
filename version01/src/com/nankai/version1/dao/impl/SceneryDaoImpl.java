package com.nankai.version1.dao.impl;

import java.sql.Connection;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

import com.nankai.version1.dao.ISceneryDao;
import com.nankai.version1.po.Scenery;
import com.nankai.version1.utils.db.ConnectionManager;
import com.nankai.version1.utils.db.DBUtils;
import com.nankai.version1.utils.db.TransactionManager;

public class SceneryDaoImpl implements ISceneryDao {

	private DBUtils dbUtils = null;
	private Connection conn;
	private ConnectionManager connectionManager;
	
	
	public SceneryDaoImpl() {
		super();
		// TODO Auto-generated constructor stub
		this.connectionManager = new ConnectionManager();
		this.dbUtils = new DBUtils();
	}


	@Override
	public List<Scenery> selectAllSceneryByCityId(int CityId) {
		// TODO Auto-generated method stub
		List<Scenery> sceneryList = new ArrayList<Scenery>();
		this.conn = connectionManager.openConnection();
		TransactionManager.conn = this.conn;
		TransactionManager.beginTransaction();
		
		String strSQL = "select * from Scenery where CityId = ?";
		Object[] params = new Object[]{CityId};
		
		ResultSet resultSet = this.dbUtils.execQuery(conn, strSQL, params);
		try {
			while(resultSet.next())
			{
				Scenery scenery = new Scenery();
				scenery.setSceneryId(resultSet.getInt(1));
				scenery.setCityId(resultSet.getInt(2));
				scenery.setSceneryName(resultSet.getString(3));
				scenery.setSceneryIntroduction(resultSet.getString(4));
				scenery.setSceneryPhoto(resultSet.getString(5));
				sceneryList.add(scenery);
			}
			return sceneryList;
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return null;
	}

}
