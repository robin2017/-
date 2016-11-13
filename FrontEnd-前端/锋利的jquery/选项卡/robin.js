$(function () {
    var menu_li=$("div.tab_menu ul li");
    //1、鼠标移到时颜色变深
    menu_li.hover(function () {
        $(this).addClass("hover");
    },function(){
        $(this).removeClass("hover");
    })
    //2、鼠标点击时变色
    menu_li.click(function () {
        $(this)
            .addClass("selected")            //当前<li>元素高亮
            .siblings().removeClass("selected");  //去掉其它同辈<li>元素的高亮
    })
    //3、鼠标点击时文字区内容变化
    menu_li.click(function () {
        var index=menu_li.index(this);
        $("div.tab_box > div").eq(index)
            .show()   //显示 <li>元素对应的<div>元素
            .siblings().hide(); //隐藏其它几个同辈的<div>元素
    })
})