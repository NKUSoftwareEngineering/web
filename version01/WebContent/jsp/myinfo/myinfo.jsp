<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<!DOCTYPE html>
<!-- saved from url=(0125)file:///C:/Users/Administrator/Desktop/%E5%95%86%E5%93%81/3a61482c-f687-4051-9031-7067333c3474/FullscreenBookBlock/index.html -->
<html class=" js no-touch cssanimations csstransforms csstransforms3d csstransitions js no-touch cssanimations csstransforms csstransforms3d csstransitions" lang="en"><head><meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
		<meta charset="UTF-8">
		<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1"> 
		<meta name="viewport" content="width=device-width, initial-scale=1.0"> 
		<title>个人主页</title>
		<meta name="description" content="Fullscreen Pageflip Layout with BookBlock">
		<meta name="keywords" content="fullscreen pageflip, booklet, layout, bookblock, jquery plugin, flipboard layout, sidebar menu">
		<meta name="author" content="Codrops">
		<link rel="shortcut icon" href="file:///C:/Users/Administrator/Desktop/%E5%95%86%E5%93%81/3a61482c-f687-4051-9031-7067333c3474/favicon.ico"> 
		<link rel="stylesheet" type="text/css" href="/version01/jsp/myinfo/myinfo_files/jquery.css">
		<link rel="stylesheet" type="text/css" href="/version01/jsp/myinfo/myinfo_files/bookblock.css">
		<link rel="stylesheet" type="text/css" href="/version01/jsp/myinfo/myinfo_files/custom.css">
		<style type="text/css">
		#apDiv1 {
	position: absolute;
	width: 108px;
	height: 66px;
	z-index: 1;
	left: 599px;
	top: 98px;
}
        </style>
		<script src="/version01/jsp/myinfo/myinfo_files/modernizr.js"></script>
</head>
	<body>
		<div id="container" class="container">	

			<div class="menu-panel">
				<h3>个人主页</h3>
				<ul id="menu-toc" class="menu-toc">
					<li class="menu-toc-current"><a>个人信息</a></li>
					<li><a>帖子详情</a></li>
				</ul>
				<div>
					<a href="/version01/jsp/index/index.jsp">主页</a>
				</div>
			</div>

			<div class="bb-custom-wrapper">
				<div id="bb-bookblock" class="bb-bookblock" style="perspective: 2000px;">
					<div class="bb-item" id="item1" style="display: block;">
						<div tabindex="0" style="overflow: hidden; padding: 0px; width: 1366px; outline: medium none;" class="content jspScrollable">
						<div style="width: 1366px; height: 523px;" class="jspContainer">
						<div style="padding: 0px; width: 1366px; left: 0px; top: 0px;" class="jspPane">
						<form action="/version01/jsp/FileUpload.jsp">
						<div class="scroller">
								<h2>个人信息        ${requestScope.user.getUserName() }</h2>
                                <txt>
                                  <left_move>
                                    <table border="0" align="center" width="51%">
                                      <tbody><tr bgcolor="#FFFFFF">
                                        <td align="center" height="186" valign="top" width="10%">头像</td>
                                        <td colspan="7" align="center" valign="top"><img src="/version01/jsp/images/people/${requestScope.user.getUserId() }.jpg" height="186" width="186"></td>
                                        </tr>
                                      <tr>
                                        <td align="center" bgcolor="#FFFFFF" height="55" valign="top">&nbsp;</td>
                                        <td colspan="5" align="center" bgcolor="#FFFFFF" valign="top"></td>
                                        <td align="center" bgcolor="#FFFFFF" valign="middle" width="31%">
                                        <input name="修改头像2" class="button" id="修改头像2" value="修改头像" type="submit">
                                       </td>
                                        <td align="center" bgcolor="#FFFFFF" valign="top" width="30%">&nbsp;</td>
                                        </tr>
                                      <tr>
                                        <td align="center" bgcolor="#FFFFFF" height="48" valign="top">邮箱</td>
                                        <td colspan="7" align="center" bgcolor="#FFFFFF" valign="top">${requestScope.user.getUserEmail() }</td>
                                        </tr>
                                    </tbody></table>
                                  </left_move>
                              </txt>
						  </div>
						  </form>
						  </div><div class="jspVerticalBar"><div class="jspCap jspCapTop">
						  </div>
						  <div style="height: 441px;" class="jspTrack">
						  <div style="height: 418px;" class="jspDrag">
						  <div class="jspDragTop">
						  </div><div class="jspDragBottom"></div></div></div>
						  
						  <div class="jspCap jspCapBottom"></div>
						</div><div class="jspHorizontalBar">
						  <div class="jspCap jspCapLeft"></div><div style="width: 0px;" class="jspTrack">
						  <div style="width: 2px;" class="jspDrag"><div class="jspDragLeft"></div>
						  <div class="jspDragRight"></div></div></div><div class="jspCap jspCapRight">
						  </div><div style="width: 2px;" class="jspCorner"></div></div></div></div>
					</div>
					<div class="bb-item" id="item5" style="display: none;">
						<div class="content">
							<div class="scroller">
								<h2> 帖子详情</h2>
								<txt>
                                  <left_move>
                                    <table border="0" align="center" width="80%">
                                      <tbody>
                                      <c:if test="${!empty requestScope.lstPost }">
                                      	<c:forEach items="${requestScope.lstPost }" var="lstPost">
                                      <tr>
                                        <th rowspan="2" scope="col" align="left" valign="middle" width="10%"><img src="/version01/jsp/myinfo/myinfo_files/snowflake.jpg" height="54" width="53"></th>
                                        <th scope="col" align="left" height="30" valign="middle" width="74%"><span class="date_txt">日期${lstPost.getPostTime() }|评论数${lstPost.getPostReNum() }</span></th>
                                        <th scope="col" width="16%">&nbsp;</th>
                                      </tr>
                                      <tr>
                                        <td align="left" height="51" valign="middle"><span class="title_txt">标题${lstPost.getPostTitle() }</span></td>
                                        <th scope="col" width="16%"><input name="查看贴子" class="button" id="查看贴子" value="查看" type="button" onClick="javascript:seepost(${lstPost.getPostId()});"></th>
                                        
                                      </tr>
                                      <tr>
                                        <td colspan="3" align="left" valign="middle"><hr color="#CCCCCC" noshade="noshade"></td>
                                      </tr>
  									</c:forEach>
  									</c:if>
  									</tbody></table>
                                  </left_move> 
                              </txt>
							</div>
						</div>
					</div>
				</div>
				
				<nav>
					<span id="bb-nav-prev" style="display: none;">←</span>
					<span style="display: block;" id="bb-nav-next">→</span>
				</nav>

				<span id="tblcontents" class="menu-button">Table of Contents</span>

			</div>
				
		</div><!-- /container -->
		<script src="/version01/jsp/myinfo/myinfo_files/jquery_004.js"></script>
		<script src="/version01/jsp/myinfo/myinfo_files/jquery_002.js"></script>
		<script src="/version01/jsp/myinfo/myinfo_files/jquery_003.js"></script>
		<script src="/version01/jsp/myinfo/myinfo_files/jquerypp.js"></script>
		<script src="/version01/jsp/myinfo/myinfo_files/jquery.js"></script>
		<script src="/version01/jsp/myinfo/myinfo_files/page.js"></script>
		<script>
			$(function() {

				Page.init();

			});
		</script>
	

</body></html>