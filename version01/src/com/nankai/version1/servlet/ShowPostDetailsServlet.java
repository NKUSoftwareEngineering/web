package com.nankai.version1.servlet;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.nankai.version1.biz.ICommentBiz;
import com.nankai.version1.biz.IPostBiz;
import com.nankai.version1.biz.IUserBiz;
import com.nankai.version1.biz.impl.CommentBizImpl;
import com.nankai.version1.biz.impl.PostBizImpl;
import com.nankai.version1.biz.impl.UserBizImpl;
import com.nankai.version1.po.Comment;
import com.nankai.version1.po.Post;
import com.nankai.version1.po.User;
import com.nankai.version1.po.UserAndComment;

/**
 * Servlet implementation class ShowPostDetailsServlet
 */
public class ShowPostDetailsServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public ShowPostDetailsServlet() {
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
	@SuppressWarnings("null")
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		request.setCharacterEncoding("UTF-8");
		response.setCharacterEncoding("UTF-8");
		IPostBiz postBiz = new PostBizImpl();
		IUserBiz userBiz = new UserBizImpl();
		ICommentBiz commentBiz = new CommentBizImpl();
		
		int cuid = postBiz.getUserIdByPostId(Integer.parseInt(request.getParameter("id")));
		User user = userBiz.showUserById(cuid);
		Post post = postBiz.showPostById(Integer.parseInt(request.getParameter("id")));
		List<Comment> lstComment = commentBiz.showAllCommentById(Integer.parseInt(request.getParameter("id")));
		List<UserAndComment> lstUserAndComment = new ArrayList<UserAndComment>();
		for(int i = 0; i<lstComment.size();i++)
		{
			int recuid = lstComment.get(i).getUserId();
			User reUser = userBiz.showUserById(recuid);
			UserAndComment userAndComment = new UserAndComment(reUser, lstComment.get(i));
			System.out.println(userAndComment);
			lstUserAndComment.add(userAndComment);
		}
		
		request.setAttribute("cuid", cuid);
		request.setAttribute("user", user);
		request.setAttribute("post", post);
		request.setAttribute("lstUserAndComment", lstUserAndComment);
		
		RequestDispatcher requestDispatcher = request.getRequestDispatcher("/jsp/post/post.jsp");
		requestDispatcher.forward(request, response);
	}

}
