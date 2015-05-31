<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html lang="en" class="no-js">

    <head>

        <meta charset="utf-8">
        <title>转转网  登录</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta name="description" content="">
        <meta name="author" content="">

        <!-- CSS -->
        <link rel="stylesheet" href="/version01/jsp/login/assets/css/reset.css">
        <link rel="stylesheet" href="/version01/jsp/login/assets/css/supersized.css">
        <link rel="stylesheet" href="/version01/jsp/login/assets/css/style.css">

        <!-- HTML5 shim, for IE6-8 support of HTML5 elements -->
        <!--[if lt IE 9]>
            <script src="http://html5shim.googlecode.com/svn/trunk/html5.js"></script>
        <![endif]-->

    </head>

    <body>

        <div class="page-container">
            <h1>登录</h1>
            <form action="/version01/LoginServlet" method="post">
                <input type="text" name="cuname" id="cuname" class="username" placeholder="用户名">
                <input type="password" name="cupassword" id="cupassword" class="password" placeholder="输入密码">
                
                <button type="submit">登录</button>
                <div class="error"><span>+</span></div>
            </form>
      
        </div>

  

        <!-- Javascript -->
        <script src="/version01/jsp/login/assets/js/jquery-1.8.2.min.js"></script>
        <script src="/version01/jsp/login/assets/js/supersized.3.2.7.min.js"></script>
        <script src="/version01/jsp/login/assets/js/supersized-init.js"></script>
        <script src="/version01/jsp/login/assets/js/scripts.js"></script>

    </body>

</html>

