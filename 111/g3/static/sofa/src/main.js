/**
 * Created with JetBrains WebStorm.
 * Author: Why
 * Date: 14-1-9
 * Time: 下午2:13
 * To change this template use File | Settings | File Templates.
 */
define(function(require,exports,module){
    var $ = require("jQuery");

    //表现层
    var Sofa = require ("./sofa");
    var sofa = new Sofa({data:[{id:"a",title:"当前有10个沙发",text:"你你你"},{id:"b",title:"当前有1个沙发",text:"我我我"}]});

    //控制层
    (function($){
        function sofaControl(){
            this.init();
        }
        sofaControl.prototype.init=function(){
            var self = this;
            $("#sofa").find("li").click(function(){
                $("#seatNumber").val("");
                self.showDialog();
                self.OK ($(this).parent().attr("id"),parseInt($(this).attr("title").replace(/\D/g, "")));
            });
        }
        sofaControl.prototype.showDialog=function(){
            var self = this;
            $("#dialog").dialog({
                title : '信息提示',
                autoOpen : false,
                open : function(event, ui) {
                    $(".ui-dialog-titlebar-close").hide();
                }
            });
            $("#dialog").dialog("open");
        }
        sofaControl.prototype.OK=function(id,num){
            $("#seat").on("click",function(){

                var number = $("#seatNumber").val();
                console.log(parseInt(number));
                if(parseInt(number)>num){
                    //调用flash

                    $("#dialog").dialog("close");
                }else{
                    alert("所抢沙发数必须大于当前沙发数");
                    return;
                }
            });
        }
        $(function(){
            new sofaControl ();
        })
    })($)

});