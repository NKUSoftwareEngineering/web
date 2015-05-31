package com.nankai.version1.servlet;

import java.io.IOException;
import java.util.List;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.nankai.version1.biz.ICityBiz;
import com.nankai.version1.biz.IPostBiz;
import com.nankai.version1.biz.ISceneryBiz;
import com.nankai.version1.biz.impl.CityBizImpl;
import com.nankai.version1.biz.impl.PostBizImpl;
import com.nankai.version1.biz.impl.SceneryBizImpl;
import com.nankai.version1.po.City;
import com.nankai.version1.po.Post;
import com.nankai.version1.po.Scenery;

/**
 * Servlet implementation class SceneryServlet
 */
public class SceneryServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public SceneryServlet() {
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
		
		ICityBiz cityBiz = new CityBizImpl();
		City city = cityBiz.showCityByCityId(Integer.parseInt(request.getParameter("CityId")));
		
		ISceneryBiz sceneryBiz = new SceneryBizImpl();
		List<Scenery> lstScenery = sceneryBiz.showAllSceneryByCityId(Integer.parseInt(request.getParameter("CityId")));
		
		IPostBiz postBiz = new PostBizImpl();
		List<Post> lstPost = postBiz.showPostByCityId(Integer.parseInt(request.getParameter("CityId")));
		
		request.setAttribute("city", city);
		request.setAttribute("lstScenery", lstScenery);
		request.setAttribute("lstPost", lstPost);
		
		RequestDispatcher requestDispatcher = request.getRequestDispatcher("jsp/shop/produce.jsp");
		requestDispatcher.forward(request, response);
	}

}
