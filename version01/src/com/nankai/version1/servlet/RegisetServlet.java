package com.nankai.version1.servlet;

import java.io.IOException;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import com.nankai.version1.biz.IUserBiz;
import com.nankai.version1.biz.impl.UserBizImpl;
import com.nankai.version1.po.User;

/**
 * Servlet implementation class rigisetservlet
 */
public class RegisetServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public RegisetServlet() {
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
		User user = new User();
		user.setUserName(request.getParameter("cuname"));
		user.setUserPassword(request.getParameter("cupassword"));
		user.setUserEmail(request.getParameter("cuemail"));
		
		IUserBiz userBiz = new UserBizImpl();
		HttpSession httpSession = request.getSession();
		switch (userBiz.add(user)) {
		case 0:
			response.sendRedirect("jsp/register/registererrorforname.jsp");
			break;
		case -1:
			response.sendRedirect("jsp/register/registererror.jsp");
			break;
		case 2:
			response.sendRedirect("jsp/register/registererrorforemail.jsp");
			break;
		default:
			request.getSession().setAttribute("username", user.getUserName());
			response.sendRedirect("jsp/index/index.jsp");
			break;
		}
	}

}
