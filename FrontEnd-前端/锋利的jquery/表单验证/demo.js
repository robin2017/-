$(function(){
    //如果是必填的，则加红星标识.
    $("form :input.required").each(function(){
        $(this).parent().append($("<strong class='high'> *</strong>"))
    });
    //文本框内容变化
    $('form :input').change(function(){
        $(this).parent().find(".formtips").remove();
        //验证用户名
        if( $(this).is('#username') ){
            if( this.value=="" || this.value.length < 6 ){
                var errorMsg = '请输入至少6位的用户名.';
                $(this).parent().append('<span class="formtips onError">'+errorMsg+'</span>');
            }else{
                var okMsg = '输入正确.';
                $(this).parent().append('<span class="formtips onSuccess">'+okMsg+'</span>');
            }
        }
        //验证邮件
        if( $(this).is('#email') ){
            if( this.value=="" || ( this.value!="" && !/.+@.+\.[a-zA-Z]{2,4}$/.test(this.value) ) ){
                var errorMsg = '请输入正确的E-Mail地址.';
                $(this).parent().append('<span class="formtips onError">'+errorMsg+'</span>');
            }else{
                var okMsg = '输入正确.';
                $(this).parent().append('<span class="formtips onSuccess">'+okMsg+'</span>');
            }
        }
    });//end change
    //提交，最终验证。
    $('#send').click(function(){
        $("form :input.required").trigger('change');
        var numError = $('form .onError').length;
        if(numError){
            return false;
        }
        alert("注册成功,密码已发到你的邮箱,请查收.");
    });
    //重置
    $('#res').click(function(){
        $(".formtips").remove();
    });
})