/**
 * Created with JetBrains WebStorm.
 * User: Administrator
 * Date: 14-1-9
 * Time: 下午2:07
 * To change this template use File | Settings | File Templates.
 */
define(function(require, exports, module){
    function Role(callBack) {
        this.options= {};
        this.roleType="manager";
        this.callBack = callBack;
        //this.tabTmpl = '<li class=""><a href="#" class="roleType" id="${text}"><em>${text}</em><span>${number}</span></a></li>';
        this.listTmpl = '<li id="${id}" style="width:500px;height:60px">'+
                                '<p>'+
                                    '<a href="${anchorHref}" title="主播等级" target="_blank ">${anchor}</a>'+
                                    '<a href="${VIPHref}" title="VIP" target="_blank ">${VIP}</a>'+
                                    '<a href="${accountHref}"  target="_blank " name="account">${account}</a>'+
                                '</p>'+
                                '<p>'+
                                    '<a href="${richHref}"  target="_blank ">${rich}</a>'+
                                '</p>'+
                           '</li>';
        this.init();
    }
    Role.prototype.init=function(){
        var self = this;
        $("#roleTab").find("li").click(function(){
            self.roleType= $(this).attr("id");
            var $type = $("#"+self.roleType+"List"), $li = $type.find("li");
            if($li.length<0){
                self.callBack(self.roleType);
            }
            $type.show().siblings().hide();
        });

    }
    /*Role.prototype.resetRoleTab = function(data) {
        var self = this;
        var $roleTab = $("#roleTab");
      //var tabData = data.tabData;

         $.template("tabTmpl", this.tabTmpl);
         $roleTab.html($.tmpl("tabTmpl", tabData));
        self.resetUserList(userList);

    }*/
    Role.prototype.resetUserList=function(data){
        var self =this,type=self.roleType;
        self.options["data"]=data;
        var $list =$("#"+type+"List");
        $.template("listTmpl", this.listTmpl);
        $list.html($.tmpl("listTmpl", data));
        self.initLiClick();
    }
    Role.prototype.initLiClick=function(){
        var self = this;
        $("#managerList").find("li").bind("click",function(){
            var id= $(this).attr("id");
            $(this).addClass("currentUser");
            self.callBack (id);
        });
        $("#userList").find("li").bind("click",function(){
            var id= $(this).attr("id");
            $(this).addClass("currentUser");
            self.callBack (id);
        });
    }
    Role.prototype.userOut=function(id){
        var self =this,currentList = self.options.data;
        $("#"+id,"#userList").remove();
    }
    Role.prototype.userIn=function(data){
       var self = this,$userList=$("#userList");
        $.template("userIn", this.listTmpl);
        var html = $.tmpl("userIn", data);
        $userList.append(html);

    }

    module.exports = Role;
});

