package com.nankai.version1.dao.impl;

import java.sql.Connection;
import java.sql.ResultSet;
import java.sql.SQLException;

import com.nankai.version1.dao.ICityDao;
import com.nankai.version1.po.City;
import com.nankai.version1.utils.db.ConnectionManager;
import com.nankai.version1.utils.db.DBUtils;
import com.nankai.version1.utils.db.TransactionManager;

public class CityDaoImpl implements ICityDao {

	private DBUtils dbUtils = null;
	private Connection conn;
	private ConnectionManager connectionManager;
	
	
	public CityDaoImpl() {
		super();
		// TODO Auto-generated constructor stub
		this.connectionManager = new ConnectionManager();
		this.dbUtils = new DBUtils();
	}


	@Override
	public City selectCityByCityId(int CityId) {
		// TODO Auto-generated method stub
		this.conn = connectionManager.openConnection();
		TransactionManager.conn = this.conn;
		TransactionManager.beginTransaction();
		
		String strSQL = "select * from City where CityId = ?";
		Object[] params = new Object[]{CityId};
		ResultSet resultSet = this.dbUtils.execQuery(conn, strSQL, params);
		try {
			while(resultSet.next())
			{
				City city = new City();
				city.setCityId(resultSet.getInt(1));
				city.setCityName(resultSet.getString(2));
				city.setCityIntroduction(resultSet.getString(3));
				city.setCityPhoto(resultSet.getString(4));
				return city;
			}
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return null;
	}

}
