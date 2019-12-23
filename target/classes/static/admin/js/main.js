layui.use(['form','element','layer','jquery'],function(){
    var form = layui.form,
        layer = parent.layer === undefined ? layui.layer : parent.layer,
        element = layui.element,
        $ = layui.jquery;

    $(".panel a").on("click",function(){
        window.parent.addTab($(this));
    });

    //数字格式化
    $(".panel span").each(function(){
        $(this).html($(this).text()>9999 ? ($(this).text()/10000).toFixed(2) + "<em>万</em>" : $(this).text());
    });

    $("#basic_trend").on('click',function () {

        layer.open({
            type: 2,
            title: '基本走势',
            skin: 'layui-layer-rim', //加上边框
            area: ['1200px', '600px'], //宽高
            content: '/stat/trend'
        });

    });

});