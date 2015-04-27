/**
 * Created with JetBrains WebStorm.
 * User: Administrator
 * Date: 14-1-9
 * Time: 下午2:07
 * To change this template use File | Settings | File Templates.
 */
define(function(require, exports, module){
    var $ = require("jQuery");
     require("jQueryUi");
     require("template");
    function Host(options) {
        this.options = {};
        this.listTmpl = '<li id="${id}" class="">'+
            '<p>'+
            '<a href="${anchorHref}" title="主播等级" target="_blank ">${anchor}</a>'+
            '<a href="${VIPHref}" title="VIP" target="_blank ">${VIP}</a>'+
            '<a href="${accountHref}"  target="_blank " name="account">${account}</a>'+
            '</p>'+
            '<p>'+
            '<a href="${richHref}"  target="_blank ">${rich}</a>'+
            '</p>'+
            '</li>';

        $.extend(this.options,options);
        this.init();
    }
    Host.prototype.init=function(){
        var self = this;
        //self.create(self.options.data );
    }
   /* Host.prototype.create = function(data) {
        var self = this;
        var $roleTab = $("#roleTab");
        $roleTab.empty();
        //var tabData = data.tabData;
        var tabData = [{text:"管理员",number:"20"},{text:"观众",number:"20"}],userList =[{id:"1001",anchor:"小鱼儿",VIP:"VIP3级",account:"30256302",rich:"富豪5级"}];
        $.template("tabTmpl", this.tabTmpl);
        $roleTab.html($.tmpl("tabTmpl", tabData));
        self.resetUserList(userList);

    }
    Host.prototype.resetUserList=function(data){
        var $userList = $("#userList");
        $userList.empty();
        $.template("listTmpl", this.listTmpl);
        $userList.html($.tmpl("listTmpl", data));
    }*/
    Host.prototype.showDialog=function(flag){
        var text = "";
        if(flag){
            text = "成功";
        }else{
            text = "失败";
        }
        $("#info").text(text);
        $("#dialog").dialog({
            title : '信息提示',
            modal : true,
            autoOpen : false,
            buttons :{
                "确认" : function(){
                    $(dialog).dialog().dialog("close");
                }
            },
            open : function(event, ui) {
                $(".ui-dialog-titlebar-close").hide();
            }
        });
        $("#dialog").dialog().dialog("open");
    }
    module.exports = Host;
});

