package com.nankai.version1.servlet;

import java.io.IOException;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.nankai.version1.biz.IUserBiz;
import com.nankai.version1.biz.impl.UserBizImpl;
import com.nankai.version1.po.User;

/**
 * Servlet implementation class MiddleSendPost
 */
public class MiddleSendPost extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public MiddleSendPost() {
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
			
			request.setAttribute("CityId", 1);
			String UserName = (String)request.getSession().getAttribute("username");
			User user = userBiz.showUserByName(UserName);
			request.setAttribute("user", user);
			
			RequestDispatcher requestDispatcher = request.getRequestDispatcher("jsp/post/sendpost.jsp");
			requestDispatcher.forward(request, response);
		} else {
			RequestDispatcher requestDispatcher = request.getRequestDispatcher("/jsp/login/pleaseLogin.jsp");
			requestDispatcher.forward(request, response);
		}
		
		
	}

}
