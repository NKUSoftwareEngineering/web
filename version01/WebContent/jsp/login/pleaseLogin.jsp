<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html lang="en">

    <head>

        <meta charset="utf-8">
        <title>请登录</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta name="description" content="">
        <meta name="author" content="">

        <!-- CSS -->
        <link rel="stylesheet" href="/version01/jsp/register/assets/bootstrap/css/bootstrap.min.css">
        <link rel="stylesheet" href="/version01/jsp/register/assets/css/style.css">
        <style type="text/css">
        #apDiv1 {
	position: absolute;
	width: 229px;
	height: 50px;
	z-index: 1;
	left: 762px;
	top: 655px;
}
        </style>

        <!-- HTML5 shim, for IE6-8 support of HTML5 elements -->
        <!--[if lt IE 9]>
            <script src="http://html5shim.googlecode.com/svn/trunk/html5.js"></script>
        <![endif]-->
       
    </head>

    <body onLoad="setup()">

        <div class="header">
            <div class="container">
                <div class="row">
                    <div class="logo span4">
                        <h1><a href="/version01/jsp/index/index.jsp">Snow Ball<span class="blue">.</span></a></h1>
                    </div>
                    <div class="links span8">
                        <a class="home" href="" rel="tooltip" data-placement="bottom" data-original-title="Home"></a>
                        <a class="blog" href="" rel="tooltip" data-placement="bottom" data-original-title="Blog"></a>
                    </div>
                </div>
            </div>
        </div>

        <div class="register-container container">
            <div class="row">
               
                <div class="register span6">
                    <form action="/version01/jsp/login/login.jsp" id="CustomerForm" method="post">
                        <h2>尚未登录<span class="red"><strong></strong></span></h2>
       					 <h2><span class="red"><strong>请重新登录</strong></span></h2>
         <button type="submit">去登录</button>
       
                    </form>
                </div>
            </div>
        </div>

        <!-- Javascript -->
        <script src="/version01/jsp/register/assets/js/jquery-1.8.2.min.js"></script>
        <script src="/version01/jsp/register/assets/bootstrap/js/bootstrap.min.js"></script>
        <script src="/version01/jsp/register/assets/js/jquery.backstretch.min.js"></script>
        <script src="/version01/jsp/register/assets/js/scripts.js"></script>
        <SCRIPT LANGUAGE="JavaScript">

    </body>

</html>

