package com.nankai.version1.servlet;

import java.io.IOException;
import java.text.SimpleDateFormat;
import java.util.Date;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.nankai.version1.biz.ICommentBiz;
import com.nankai.version1.biz.IUserBiz;
import com.nankai.version1.biz.impl.CommentBizImpl;
import com.nankai.version1.biz.impl.UserBizImpl;
import com.nankai.version1.po.Comment;
import com.nankai.version1.po.User;

/**
 * Servlet implementation class AddReplyServlet
 */
public class AddReplyServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public AddReplyServlet() {
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
		if(request.getSession().getAttribute("username")!=null){
			IUserBiz userBiz= new UserBizImpl();
			ICommentBiz commentBiz = new CommentBizImpl();
			
			int postId = Integer.parseInt(request.getParameter("poid"));
			String recontect = request.getParameter("recontect");
			System.out.println(recontect);
			SimpleDateFormat df = new SimpleDateFormat("HH:mm:ss");
			String time = df.format(new Date());
			
			String userName = (String)request.getSession().getAttribute("username");
			User user = userBiz.showUserByName(userName);
			
			int userId = user.getUserId();
			
			Comment comment = new Comment();
			comment.setPostId(postId);
			comment.setCommentContent(recontect);
			comment.setCommentTime(time);
			comment.setUserId(userId);
			
			commentBiz.insertComment(comment);
			
			RequestDispatcher requestDispatcher = request.getRequestDispatcher("/ShowPostDetailsServlet?id="+postId);
			requestDispatcher.forward(request, response);
		} else
		{
			RequestDispatcher requestDispatcher = request.getRequestDispatcher("/jsp/login/pleaseLogin.jsp");
			requestDispatcher.forward(request, response);
		}
	}

}
