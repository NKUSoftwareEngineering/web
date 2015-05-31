package com.nankai.version1.servlet;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

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
 * Servlet implementation class ShowUserInfoServlet
 */
public class ShowUserInfoServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public ShowUserInfoServlet() {
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
		IUserBiz userBiz = new UserBizImpl();
		IPostBiz postBiz = new PostBizImpl();
		if(request.getSession().getAttribute("username") != null){
			String UserName = (String)request.getSession().getAttribute("username");
			User user = userBiz.showUserByName(UserName);
			
			List<Post> lstPost = new ArrayList<Post>();
			lstPost = postBiz.showPostByUserId(user.getUserId());
			
			request.setAttribute("user", user);
			request.setAttribute("lstPost", lstPost);
			RequestDispatcher requestDispatcher = request.getRequestDispatcher("jsp/myinfo/myinfo.jsp");
			requestDispatcher.forward(request, response);
		}else{
			RequestDispatcher requestDispatcher = request.getRequestDispatcher("jsp/login/login.jsp");
			requestDispatcher.forward(request, response);
		}
		
		
	}

}
