<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<!DOCTYPE html>
<!-- saved from url=(0093)file:///C:/Users/Administrator/Desktop/%E5%9C%88%E5%AD%90/2/blog%20-%20%E6%8B%B7%E8%B4%9D.htm -->
<html lang="en" class=" js csstransitions js csstransitions"><head><meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
		<meta charset="UTF-8">
		<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1"> 
		<meta name="viewport" content="width=device-width, initial-scale=1.0"> 
		<title>转转景点</title>
		<meta name="description" content="Blueprint: Quotes Rotator">
		<meta name="keywords" content="quotes rotator, content rotator, jquery, javascript, fade in, fade out, css3, component, html, web development, blockquote">
		<meta name="author" content="Codrops">
		<link rel="stylesheet" type="text/css" href="/version01/jsp/shop/product_files/default.css">
		<link rel="stylesheet" type="text/css" href="/version01/jsp/shop/product_files/component.css">
		<script type="text/javascript" async="" src="/version01/jsp/shop/product_files/ga.js"></script><script type="text/javascript" async="" src="./product_files/ga(1).js"></script>
		<script src="/version01/jsp/shop/product_files/modernizr.custom.js"></script>
        <style>
    nav a {
	text-decoration: none;
	color: #C4FFFF;
	font-family: "幼圆";
	position: relative;
	display: inline-block;
	margin: 0;
	font-weight: 400;
    }
	section{
	text-align: center;
	margin-top: 0;
	margin-right: auto;
	margin-bottom: 0;
	margin-left: auto;
	/* [disabled]padding-top: 5px; */
	padding-right: 50px;
	/* [disabled]padding-bottom: 10px; */
	padding-left: 50px;
	}

    /* BG colours */
	

	.shade4{
	background-color: #66CCCC;
	}
	
	.lable_ {
	height: 30px;
	width: 50px;
	border-radius: 2px;
	font-size: 18px;
}

.cbp-nttrigger-n {
	cursor: pointer;
	color: #FF9599;
	font-size: 2em;
}

        </style>

	</head>
	<body>
		<div class="container">
			<header class="clearfix">
				<span>转转网</span>
				<h1><span style="font-family: &#39;幼圆&#39;; font-size: 2.05em; color: #FEEBB1;">城市-景点</span> </h1>
                    
		  </header>
           
		  <div class="main">
				
                
                <ul id="cbp-ntaccordion" class="cbp-ntaccordion">
                  <li></li>
					<li>
					<h3 class="cbp-nttrigger">${requestScope.city.getCityName() }</h3>
                    
                    <!--主贴--->
					<div class="cbp-ntcontent">
				     
					   
					   
					  
                        <form action="" method="post">  
				    
                      <div id="bo">
                        <table width="100%" border="0" align="center">
                                <tbody><tr>
                                  <th width="505" rowspan="8" align="center" valign="top" scope="col"><img src="/version01/jsp/images/citys/${requestScope.city.getCityId() }.jpg" width="455" height="399">
                                  </th>
                                 
                               <td height="49" align="left" valign="top" style="font-size: 20px">景点简介</td>
                                  <td colspan="2" align="left" valign="top" style="font-size: 24px">${requestScope.city.getCityIntroduction() }</td>
                              
                               
                                </tr>
                               
                               
                        </tbody></table>
                      
  </div>

 
				  
                  </form>
                        
                          
                         
                         
				      
				      </div>
                    
                      
                      
				  </li>
				</ul>
                
                
                
                
                <ul id="cbp-ntaccordion" class="cbp-ntaccordion">
                  <li></li>
                  
					<li>
					  <h3 class="cbp-nttrigger-n">热门景点</h3>
                <c:forEach items="${requestScope.lstScenery}" var="Scenery">
                <div class="cbp-ntcontent">
					   
					  
                        <form action="" method="post">  
				    
                      <div id="bo">
                      <table width="100%" border="0" align="center">
						  <tr>
						    <td width="505" rowspan="8" ><img src="/version01/jsp/images/Scenery/${Scenery.getCityId() }+${Scenery.getSceneryId() }.jpg" width="455" height="399"></td>
						    <td height="20px" colspan="2" align="left" valign="top" style="color: #893F24; font-size: 30px;" >${Scenery.getSceneryName() }</td>
						  </tr>
						  <tr>
						    <td height="5" rowspan="7" align="left" valign="top" style="font-size: 30px">景点简介</td>
                            <td colspan="2" rowspan="7" align="left" valign="top" style="font-size: 24px">${Scenery.getSceneryIntroduction() }</td>
						  </tr>
					</table>
  </div>

 
				  
                  </form> 
				      
				      </div>
                
              </c:forEach>
              </li>
              </ul>  
                
                
                
                
                
                  <ul id="cbp-ntaccordion" class="cbp-ntaccordion">
                  <li></li>
                  
                  
                  
					<li>
					  <h3 class="cbp-nttrigger-n">相关游记</h3>
					  <div class="cbp-ntcontent">
					    <ul class="cbp-ntsubaccordion">
                        <!-- 内容帖子-->
                        
                        <c:forEach items="${requestScope.lstPost}" var="post">
                        
					    <li>
					      <div class="links"> <a class="time">${post.getPostTime() }</a> 
					      <a class="comments">${post.getPostReNum() } Comments</a>
					        <h2>${post.getPostTitle() }</h2>
				          </div>
					    
					        <div class="cbp-ntcontent">
					          <p>${post.getPostContent() }
                              <a href="/version01/ShowPostDetailsServlet?id=${post.getPostId()}" class="more">Read More</a></p>
                              
				            </div>
				          </li>
				          
				          </c:forEach>
				          
				          
                         <!-- 内容帖子  end-->  
				        </ul>
				      </div>
				  </li>
				</ul>
                
                
			</div>
		</div>
		<script src="/version01/jsp/shop/product_files/jquery.min.js"></script>
		<script src="/version01/jsp/shop/product_files/jquery.cbpQTRotator.min.js"></script><div id="cdawrap"><span id="cda-remove"></span><script type="text/javascript" async="" id="_adpacks_js" src="file://cdn.adpacks.com/adpacks.js?zoneid=1386&serve=C6SI42Y&placement=tympanusnet"></script></div>
		<script>
			$( function() {
				
				$( '#cbp-qtrotator' ).cbpQTRotator();

			} );
		</script>
        
        <script src="file:///C:/Users/Administrator/Desktop/%E5%9C%88%E5%AD%90/2/Blueprint%20%20Nested%20Accordion_files/jquery.cbpNTAccordion.min.js"></script>
		
</body></html>