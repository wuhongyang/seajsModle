/**
 * Created with JetBrains WebStorm.
 * User:Why
 * Date: 14-1-14
 * Time: 下午2:07
 * To change this template use File | Settings | File Templates.
 */
define(function(require, exports, module){
	var HeaderService = require("./headerService");
	var headerService = new HeaderService();
    function Header(callBack) {
        this.options = {};
        this.callBack=callBack;
        this.turnToId="";
        this.init();
    }
    Header.prototype.init=function(){
        var self = this;
        self.initNav();
		self.hover();
    }
    Header.prototype.resetBase=function(data){
        var $userName = $("#userName"),$userId=$("#userId");
        $userName.text(data.user.name);
        $userId.text(data.id);
    }
    Header.prototype.resetImg = function(img) {
        var $img = $("#img",".logo");
        $img.attr("src",img);
    }
    Header.prototype.resetPing = function(data) {
          console.log(data);
    }
    Header.prototype.initNav=function(){
        var self =this;
        var m = $(".subnavItem").click(function(){
            self.turnToId= $(this).attr("id");
            self.callBack (self.turnToId);
        });
    }
    Header.prototype.hover = function() {		 
        var self = this,id="";
		var item = $(".navItem","#header");
        $('.navItem').mouseover(function(){										
            id = $(this).attr("id");
            self.showOrHideSub(id,true);
        }).mouseleave(function() {
            self.showOrHideSub(id,false)
        });
    }
    Header.prototype.showOrHideSub = function(id,flag){
        var $subNav;
        switch(id){
            case "m":
                $subNav =$("#mm");
                break;
            case "n":
                $subNav =$("#nn");
                break;
            default:
                return;
        }
        if(flag){
            $subNav.show();
        }else{
            $subNav.hide();
        }
    }
    module.exports = Header;
});

