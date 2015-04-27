/**
 * Created with JetBrains WebStorm.
 * Author: Why
 * Date: 14-1-9
 * Time: 下午2:13
 * To change this template use File | Settings | File Templates.
 */
define(function(require,exports,module){
    var jQuery = require("jQuery");
    //模型
    var Deal = require ("./deal");
    var deal = new Deal ({data:{}});
    //控制层
    (function($){
        function dealControl(){
            this.init();
        }
        dealControl.prototype.init=function(){
                $("#sendNum").val("1");
                $(".dealType li").bind("click", function () {
                    var index = $(this).index(),type=$(this).attr("name");
                    var data = deal.setBox(type);
                    deal.create(type,data);
                    var divs = $("#tabDivs > div");
                    deal.show(index,divs);
                });

                $(".numup").click(function(){
                    var num =$("#sendNum").val();
                    if(""===num){
                        num="0";
                    }
                    var i = parseInt(num);
                    console.log(i);
                    var now = i+1;
                    $("#sendNum").val(now)
                });
            $("#sendTo").click(function(){
                    var text = $("#asdasd").attr("id");
                console.log(text);
            });
            $(".numdown").click(function(){
                var num =$("#sendNum").val();
                var i = parseInt(num);
                console.log(i);
                var now = i-1;
                $("#sendNum").val(now);
                if("1"===num){
                    $("#sendNum").val("1");
                    alert("送礼个数不能小于1");
                }
            });

        }
        $(function(){
            new dealControl ();
        })
    })(jQuery)

});