<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<!-- saved from url=(0170)file:///D:/dreamweaver%E7%B4%A0%E6%9D%90/%E7%95%8C%E9%9D%A2%E8%B5%84%E6%BA%90/%E6%B3%A8%E5%86%8C%E7%95%8C%E9%9D%A2/fullscreen-register/index%20-%20%E6%8B%B7%E8%B4%9D.html -->
<html lang="en"><head><meta http-equiv="Content-Type" content="text/html; charset=UTF-8">

        <meta charset="utf-8">
        <title>version01 发帖</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta name="description" content="">
        <meta name="author" content="">

        <!-- CSS -->
        <link rel="stylesheet" href="file:///D:/dreamweaver%E7%B4%A0%E6%9D%90/%E7%95%8C%E9%9D%A2%E8%B5%84%E6%BA%90/%E6%B3%A8%E5%86%8C%E7%95%8C%E9%9D%A2/fullscreen-register/assets/bootstrap/css/bootstrap.min.css">
        <link rel="stylesheet" href="file:///D:/dreamweaver%E7%B4%A0%E6%9D%90/%E7%95%8C%E9%9D%A2%E8%B5%84%E6%BA%90/%E6%B3%A8%E5%86%8C%E7%95%8C%E9%9D%A2/fullscreen-register/assets/css/style.css">
    <style type="text/css">
        #apDiv1 {
	position: absolute;
	width: 229px;
	height: 50px;
	z-index: 1;
	left: 762px;
	top: 655px;
}
        .secr {
	background-color: transparent;
	position: relative;
	top: 100px;
}
.title {
	height: 30px;
	width: 500px;
}
     
	 .picture {
	background-image: url(/version01/jsp/post/post_files/3.jpg);
	background-repeat: no-repeat;
	cursor: pointer;
	width: 32px;
	height: 32px;
	border: 0;
	 }
	  .picture {
		  filter:alpha(opacity=80);
		  opacity:0.8;
	
	 }
	
    .post_area {
	height: 160px;
	width: 500px;
}
       #apDiv4 {
	position: absolute;
	width: 32px;
	height: 32px;
	z-index: 2;
	left: 716px;
	top: 150px;
}
    </style>
        
       <script>
	function send(){
		var cityid = 1;
		var title=document.form1.title2.value;
		var contect = document.form1.post2.value;
		window.location="/version01/SendPostServlet?CityId="+cityid+"&contect="+contect+"&title="+title;
	}
	</script>
    </head>

    <body onload="setup()">

        <div class="header">
            <div class="container">
                <div class="row">
                    <div class="logo span4">
                        <h1><a href="/version01/jsp/index/index.htm">转转<span class="blue"></span></a></h1>
                    </div>
                    <div class="links span8">
                        <a class="home" href="" rel="tooltip" data-placement="bottom" data-original-title="Home"></a>
                        <a class="blog" href="" rel="tooltip" data-placement="bottom" data-original-title="Blog"></a>
                    </div>
                </div>
            </div>
        </div>

   <p><br>
   </p>
   <form id="form1" name="form1">
   <table width="61%" border="0" align="center">
  <tbody><tr>
    <th width="17%" rowspan="4" valign="top" scope="col"><img src="/version01/jsp/images/people/1${requestScope.user.getUserId()}.jpg" width="100" height="100" class="toux"></th>
    <th height="34" colspan="3" align="left" scope="col"><input name="title2" type="text" class="title" id="title2" onblur="MM_setTextOfTextfield(&#39;title&#39;,&#39;&#39;,&#39;shezhiwenben&#39;)" value="TITLE"></th>
    </tr>
  <tr>
    <td height="52" colspan="3" align="left">
    <img src="/version01/jsp/post/post_files/ss.PNG" alt="" width="516" height="33" usemap="#Map">
    </td>
    </tr>
  <tr>
    <td height="78" colspan="3" align="left"><textarea name="post2" class="post_area" id="post2"></textarea></td>
    </tr>
  <tr>
    <td width="28%">
		<input type="button" value="发表" class="btn-info" onClick="javascript:send();">
	</td>
    <td width="37%" align="right"><input type="button" class="btn-warning" value="取消"></td>
    <td width="18%" align="right">&nbsp;</td>
  </tr>
</tbody></table>

</form>
        <!-- Javascript -->
        <script src="/version01/jsp/post/post_files/jquery-1.8.2.min.js"></script>
        <script src="/version01/jsp/post/post_files/bootstrap.min.js"></script>
        <script src="/version01/jsp/post/post_files/jquery.backstretch.min.js"></script>
        <script src="/version01/jsp/post/post_files/scripts.js"></script>
        <script language="JavaScript"></script>

    </body>

</html>

</script><div class="backstretch" style="left: 0px; top: 0px; overflow: hidden; margin: 0px; padding: 0px; height: 661px; width: 1304px; z-index: -999999; position: fixed;"><img src="./post_files/3.jpg" style="position: absolute; margin: 0px; padding: 0px; border: none; width: 1304px; height: 733.5px; max-width: none; z-index: -999999; left: 0px; top: -36.25px;"></div></body></html>