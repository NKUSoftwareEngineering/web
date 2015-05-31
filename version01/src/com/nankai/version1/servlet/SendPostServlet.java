package com.nankai.version1.servlet;

import java.io.IOException;
import java.text.SimpleDateFormat;
import java.util.Date;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.nankai.version1.biz.IPostBiz;
import com.nankai.version1.biz.IUserBiz;
import com.nankai.version1.biz.impl.PostBizImpl;
import com.nankai.version1.biz.impl.UserBizImpl;
import com.nankai.version1.po.Post;
import com.nankai.version1.po.User;

/**
 * Servlet implementation class SendPostServlet
 */
public class SendPostServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public SendPostServlet() {
        super();
        // TODO Auto-generated constructor stub
        
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		doPost(request, response);
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		request.setCharacterEncoding("UTF-8");
		response.setCharacterEncoding("UTF-8");
		if(request.getSession().getAttribute("username")!=null)
		{
			IUserBiz userBiz = new UserBizImpl();
			IPostBiz postBiz = new PostBizImpl(); 
			String userName = (String)request.getSession().getAttribute("username");
			String contect = request.getParameter("contect");
			String title = request.getParameter("title");
			int CityId = Integer.parseInt(request.getParameter("CityId"));
			System.out.println(CityId);
			SimpleDateFormat df = new SimpleDateFormat("HH:mm:ss");//设置日期格式
			String time = df.format(new Date());
			
			User user = userBiz.showUserByName(userName);
			
			Post post = new Post();
			post.setCityId(CityId);
			post.setPostContent(contect);
			post.setPostReNum(0);
			post.setPostTime(time);
			post.setPostTitle(title);
			post.setUserId(user.getUserId());
			
			postBiz.insertPost(post);
			
			RequestDispatcher requestDispatcher = request.getRequestDispatcher("/SceneryServlet?CityId="+CityId);
			requestDispatcher.forward(request, response);
		} else {
			RequestDispatcher requestDispatcher = request.getRequestDispatcher("/jsp/login/pleaseLogin.jsp");
			requestDispatcher.forward(request, response);
		}
		
	}

}
