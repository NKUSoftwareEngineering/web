<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<!DOCTYPE html>
<!-- saved from url=(0045)http://tympanus.net/Blueprints/QuotesRotator/ -->
<html lang="en" class=" js csstransitions"><head><meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
		<meta charset="UTF-8">
		<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1"> 
		<meta name="viewport" content="width=device-width, initial-scale=1.0"> 
		<title>转转社区</title>
		<meta name="description" content="Blueprint: Quotes Rotator">
		<meta name="keywords" content="quotes rotator, content rotator, jquery, javascript, fade in, fade out, css3, component, html, web development, blockquote">
		<meta name="author" content="Codrops">
		<link rel="shortcut icon" href="http://tympanus.net/Blueprints/favicon.ico">
		<link rel="stylesheet" type="text/css" href="/version01/jsp/post/blog/default.css">
		<link rel="stylesheet" type="text/css" href="/version01/jsp/post/blog/component.css">
		<script type="text/javascript" async src="/version01/jsp/post/blog/ga.js"></script>
		<script src="/version01/jsp/post/blog/modernizr.custom.js"></script>
		<script type="text/javascript">

		  var _gaq = _gaq || [];
		  _gaq.push(['_setAccount', 'UA-7243260-2']);
		  _gaq.push(['_trackPageview']);

		  (function() {
		    var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
		    ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
		    var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
		  })();

		</script>
        <script type="text/javascript">
        function submit(){
        	var poid=document.getElementById("poid").value;
     		var recontect=document.getElementById("recontect").value;
        	window.location="/version01/AddReplyServlet?poid="+poid+"&recontect="+recontect;
        }
        </script>
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
        </style>

	</head>
	<body>
		<div class="container">
			<header class="clearfix">
				<span>转转网</span>
				<h1><span style="font-family: '幼圆'; font-size: 2.05em; color: #FBEB34;">转转社区</span> </h1>
                    
		  </header>
		  <div class="main">
				
                
                <ul id="cbp-ntaccordion" class="cbp-ntaccordion">
                  <li></li>
					<li>
					<h3 class="cbp-nttrigger">${requestScope.post.getPostTitle() }</h3>
                    
                    <!--主贴--->
					<div class="cbp-ntcontent">
				      <p></p>
					    <ul class="cbp-ntsubaccordion">
					   
					    <li>
					     
<div class="cbp-ntcontent">
  <table width="100%" border="0" cellpadding="10px">
    <tr>
    <td width="17%" height="269" align="center" valign="top">
    <div class="left_float">
    
    <img src="/version01/jsp/images/people/${requestScope.cuid }.jpg" width="150" height="150">
      <table width="100%" border="0" align="center" cellpadding="0">
        <tr>
          <td height="35" align="center" style="color: #FF554B; font-size: 20px;">${requestScope.user.getUserName() }</td>
        </tr>
      </table>
    
    </div>
      
      
      </td>
    <td width="83%" align="left" valign="top">
          <p>${requestScope.post.getPostContent() }</p>
   
       
    </td>
  </tr>
</table>
  
                              
	            </div>
				          </li>
                          
                          <!----回复---->
                          
                           <c:forEach items="${requestScope.lstUserAndComment }" var="lstUserAndComment">
                          <li>
					     
						<div class="cbp-ntcontent">
						  <table width="100%" border="0" cellpadding="10px">
						    <tr>
						    <td width="17%" height="224" align="center">
						    
						    <div class="left_float">
						    
						    <img src="/version01/jsp/images/people/${lstUserAndComment.getUser().getUserId() }.jpg" width="150" height="150">
						      <table width="100%" border="0" align="center" cellpadding="0">
						        <tr>
						          <td height="35" align="center"><span style="color: #FF554B; font-size: 20px;">昵称    ${lstUserAndComment.getUser().getUserName() }</span></td>
						        </tr>
						      </table>
						    
						    </div>
						      
						      </td>
						    <td width="83%" align="left" valign="top">
						      
						      <p>${lstUserAndComment.getComment().getCommentContent() }</p>
						   
						    </td>
						  </tr>
						</table>
						
						                              
							            </div>
				          </li>
				          
				          </c:forEach>
				          
                          <!--回复 end-->
                         
				        </ul>
				      </div>
                      <from name="form1" id="form1" method="post" action="" >
                      <input type="hidden" id="poid" name="poid" value=${requestScope.post.getPostId() }> 
                      <h3 class="cbp-nttrigger" style="font-size: 2em; color: #FBEB34;">评论</h3> 
                      <div class="cbp-ntcontent">
				      <p></p>
					    <ul class="cbp-ntsubaccordion">
					   
					    <li>
					     
<div class="cbp-ntcontent">
                <textarea name="recontect" class="comment_area" id="recontect" cols="140" rows="13"></textarea>
                              
	            </div>
                <div class="cbp-ntcontent">
                 <input type="button" value="发表"  class="btn" onClick="javascript:submit();">            
	            </div>
				          </li>
                        
				        </ul>
				      </div>
                      </from>
                      
				  </li>
				</ul>
                
                
                
			</div>
		</div>
		<script src="/version01/jsp/post/blog/jquery.min.js"></script>
		<script src="/version01/jsp/post/blog/jquery.cbpQTRotator.min.js"></script>
		<script>
			$( function() {
				
				$( '#cbp-qtrotator' ).cbpQTRotator();

			} );
		</script>
		
</body></html>