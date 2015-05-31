
jQuery(document).ready(function() {

    /*
        Background slideshow
    */
    $.backstretch([
      "/version01/jsp/register/assets/img/backgrounds/1.jpg"
    , "/version01/jsp/register/assets/img/backgrounds/2.jpg"
    , "/version01/jsp/register/assets/img/backgrounds/3.jpg"
	, "/version01/jsp/register/assets/img/backgrounds/4.jpg"
    ], {duration: 3000, fade: 750});

    /*
        Tooltips
    */
    $('.links a.home').tooltip();
    $('.links a.blog').tooltip();

    /*
        Form validation
    */
    $('.register form').submit(function(){
    	function IsDigit(cCheck)
    	{
    		return (('0'<=cCheck) && (cCheck<='9'));
    	}
    	function IsAlpha(cCheck)
    	{
    		return ((('a'<=cCheck) && (cCheck<='z')) || (('A'<=cCheck) && (cCheck<='Z')))
    	}
    	
    	
        $(this).find("label[for='登录名']").html('loadname');
        $(this).find("label[for='密码']").html('password');
        $(this).find("label[for='确认密码']").html('confirpwd');
        $(this).find("label[for='真实姓名']").html('cutruename');
        $(this).find("label[for='邮箱']").html('email');
        $(this).find("label[for='性别']").html('sex');
        $(this).find("label[for='出生日期']").html('birthday');
        $(this).find("label[for='城市信息']").html('add');
        $(this).find("label[for='邮政编码']").html('ZIP_CD');
        $(this).find("label[for='手机号码/电话号码']").html('TEL1');
        ////
        var loadname = $(this).find('input#loadname').val();
        var password = $(this).find('input#password').val();
        var confirpwd = $(this).find('input#confirpwd').val();
        var cutruename = $(this).find('input#cutruename').val();
        var email = $(this).find('input#email').val();
        
        var sex = $(this).find('select#sex').val();
        var BIRTH_DT_YEAR = $(this).find('select#BIRTH_DT_YEAR').val();
        var BIRTH_DT_MONTH = $(this).find('select#BIRTH_DT_MONTH').val();
        var BIRTH_DT_DATE = $(this).find('select#BIRTH_DT_DATE').val();
        var s1 = $(this).find('select#s1').val();
        var s2 = $(this).find('select#s2').val();
        var s3 = $(this).find('select#s3').val();
        var ADDR2 = $(this).find('input#ADDR2').val();
        var ZIP_CD = $(this).find('input#ZIP_CD').val();
        var TEL1 = $(this).find('input#TEL1').val();
        if(loadname == '') {
            $(this).find("label[for='loadname']").append("<span style='display:none' class='red'> - 请输入您的用户名.</span>");
            $(this).find("label[for='loadname'] span").fadeIn('medium');
            return false;
        }
        if(password == '') {
            $(this).find("label[for='password']").append("<span style='display:none' class='red'> - 请输入密码.</span>");
            $(this).find("label[for='password'] span").fadeIn('medium');
            return false;
        }
        if(password.length<8) {
            $(this).find("label[for='password']").append("<span style='display:none' class='red'> - 密码需要大于8位.</span>");
            $(this).find("label[for='password'] span").fadeIn('medium');
            return false;
        }
        
        for (nIndex=0; nIndex<password.length; nIndex++)
    	{
    		cCheck = password.charAt(nIndex);
    		if (!(IsDigit(cCheck) || IsAlpha(cCheck)))
    		{
    			$(this).find("label[for='password']").append("<span style='display:none' class='red'> - 密码只能使用字母和数字.</span>");
                $(this).find("label[for='password'] span").fadeIn('medium');
                return false;
    		}
    	}
        
        if(confirpwd == '') {
            $(this).find("label[for='confirpwd']").append("<span style='display:none' class='red'> - 请输入确认密码.</span>");
            $(this).find("label[for='confirpwd'] span").fadeIn('medium');
            return false;
        }
        if(confirpwd != password) {
            $(this).find("label[for='confirpwd']").append("<span style='display:none' class='red'> - 确认密码和密码不一致.</span>");
            $(this).find("label[for='confirpwd'] span").fadeIn('medium');
            return false;
        }
        if(cutruename == '') {
            $(this).find("label[for='cutruename']").append("<span style='display:none' class='red'> - 请输入您的真实姓名.</span>");
            $(this).find("label[for='cutruename'] span").fadeIn('medium');
            return false;
        }
        if(email == '') {
            $(this).find("label[for='email']").append("<span style='display:none' class='red'> - 请输入您的邮箱.</span>");
            $(this).find("label[for='email'] span").fadeIn('medium');
            return false;
        }
        if(email.search(/^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/) == -1){
        	$(this).find("label[for='email']").append("<span style='display:none' class='red'> - 邮箱格式不对.</span>");
            $(this).find("label[for='email'] span").fadeIn('medium');
            return false;
        }
        if(sex == '') {
            $(this).find("label[for='sex1']").append("<span style='display:none' class='red'> - 请选择性别.</span>");
            $(this).find("label[for='sex1'] span").fadeIn('medium');
            return false;
        }
        if((BIRTH_DT_YEAR == '') || (BIRTH_DT_MONTH == '') || (BIRTH_DT_DATE == '')) {
            $(this).find("label[for='birthday']").append("<span style='display:none' class='red'> - 请选择您的生日.</span>");
            $(this).find("label[for='birthday'] span").fadeIn('medium');
            return false;
        }
        if((s1 == '') || (s2 == '') || (s3 == '') ||(ADDR2 == '')) {
            $(this).find("label[for='add']").append("<span style='display:none' class='red'> - 请完善您的地址信息.</span>");
            $(this).find("label[for='add'] span").fadeIn('medium');
            return false;
        }
        if(ZIP_CD == '') {
            $(this).find("label[for='ZIP_CD']").append("<span style='display:none' class='red'> - 请填写您的邮编.</span>");
            $(this).find("label[for='ZIP_CD'] span").fadeIn('medium');
            return false;
        }
        if(TEL1 == '') {
            $(this).find("label[for='TEL1']").append("<span style='display:none' class='red'> - 请填写您的电话.</span>");
            $(this).find("label[for='TEL1'] span").fadeIn('medium');
            return false;
        }
    });


});


