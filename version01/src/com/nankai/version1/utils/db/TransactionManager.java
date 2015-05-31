package com.nankai.version1.utils.db;

import java.sql.Connection;
import java.sql.SQLException;
import java.util.Date;

public class TransactionManager {

	public static Connection conn = null;
	private static ConnectionManager connectionManager = new ConnectionManager();
	
	public static void beginTransaction(){
		System.out.println("[TracsactionManager]开始访问数据库"+new Date());
		try {
			conn.setAutoCommit(false);
			System.out.println("[TracsactionManager]访问数据库成功"+new Date());
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
			System.out.println("[TracsactionManager]访问数据库失败"+new Date());
		}
	}
	
	public static void commit(){
		try {
			System.out.println("[TracsactionManager]操作确认中"+new Date());
			conn.commit();
			System.out.println("[TracsactionManager]操作确认成功"+new Date());
			connectionManager.closeConnection(conn);  // 鍏抽棴鏁版嵁搴撹繛鎺�
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
			System.out.println("[TracsactionManager]操作确认失败"+new Date());
		}
	}
	
	public static void rollback(){
		try {
			System.out.println("[TracsactionManager]操作回滚中"+new Date());
			conn.rollback();
			System.out.println("[TracsactionManager]操作回滚成功"+new Date());
			connectionManager.closeConnection(conn);  // 鍏抽棴鏁版嵁搴撹繛鎺�
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
			System.out.println("[TracsactionManager]操作回滚失败"+new Date());
		}
	}
}
