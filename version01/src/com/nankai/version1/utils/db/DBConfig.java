package com.nankai.version1.utils.db;

import java.io.IOException;
import java.util.Properties;
public class DBConfig {
	private static final Properties pros = new Properties();
	
	static{
		try{
			pros.load(DBConfig.class.getResourceAsStream("db.cfg.properties"));
		}catch(IOException e){
			e.printStackTrace();
		}
	}
	
	public static final String IP = pros.getProperty("IP");
	public static final String PORT = pros.getProperty("PORT");
	public static final String DBNAME = pros.getProperty("DBNAME");
	public static final String ACCOUNT = pros.getProperty("ACCOUNT");
	public static final String PASSWORD = pros.getProperty("PASSWORD");
}
