/**
 * Created with JetBrains WebStorm.
 * User: Administrator
 * Date: 14-1-9
 * Time: 下午2:07
 * To change this template use File | Settings | File Templates.
 */
define(function(require, exports, module){
    var $ = require("jQuery");
    var $tmpl = require("template");
    //服务层
    var DealService = require ("./dealService");
    var dealService = new DealService();
    var roleId="";
    function Deal(callBack) {
        this.options = {};
        this.labelTmpl = ' <li id="${id}">${label}</li>';
        this.typeTmpl =' <li id="${id}" class="img"><img src="${src}" width="40" height="40" /><p>${text}</p></li>';
        this.init();
    }
    Deal.prototype.init=function(){
        var self = this;
        self.initClick();
    }
    Deal.prototype.create = function(type,data) {
        var self = this, $labels = $("#labels"), $list = $("#list-"+type+"-low");
            self.template($list,this.typeTmpl,data.list);
        if(data.labels){
            self.template($labels,this.labelTmpl,data.labels);
            $labels.find("li").eq(0).addClass("current");
            self.initGiftLabels ($labels);
        }
        self.initSend();
    }
    Deal.prototype.initSend=function(){
           $(".img").bind("click",(function(){
               var id = $(this).attr("id");
               console.log(id);
           }));
    }
    Deal.prototype.initGiftLabels=function($labels){
        var self =this;
        $labels.find("li").bind("click",function(){
            var id=$(this).attr("id");
            $(this).addClass("current").siblings().removeClass("current");
            self.check(id);
        });

    }
    Deal.prototype.check=function(id){
        var self=this,exist = $("#list-gift-"+id);
        if(exist.children().length > 0 ){
           exist.show().siblings().hide();
        }else{
            var ul = document.createElement("ul");
            $(ul).attr("id","list-gift-"+id);
            $(ul).attr("class","clears");
            var data = dealService.getGift(id);
            self.template($(ul),this.typeTmpl,data.list);
            $(ul).appendTo( $("#list-gift"));
            $(ul).siblings().hide();
            self.initSend();
        }
    }

    Deal.prototype.show=function(index,doms){
        doms.hide();
        var now = doms.eq(index);
        var id = now.attr("id");
        now.show();
        if("tabs-1" == id){
           $("#list-gift-low").show().siblings().hide();
        }
    }
    Deal.prototype.setID=function(id){
        roleId = id;
    }
    Deal.prototype.getRoleId=function(){
        return roleId;
    }
    Deal.prototype.template=function($div,tmpl,data){
        var string = "template";
        $.template(string, tmpl);
        $div.html($.tmpl(string, data));
    }
    Deal.prototype.setBox=function(type){
        return dealService.getGiftOrProp(type);
    }
    Deal.prototype.initClick=function(){
        var self =this;
        $("#sendNum").val("1");
        $(".dealType li").bind("click", function () {
            var index = $(this).index(),type=$(this).attr("name");
            var data = self.setBox(type);
            self.create(type,data);
            var divs = $("#tabDivs > div");
            self.show(index,divs);
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
    module.exports = Deal;
});

