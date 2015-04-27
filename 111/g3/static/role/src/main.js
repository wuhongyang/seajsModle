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
    var Role = require ("./role");
    var role = new Role ({data:{}});
   /* var Deal = require ("/static/deal/src/deal.js");
    var deal = new Deal ();*/
   //服务层
    var RoleService = require ("./roleService");
    var roleService = new RoleService();
   //控制层
    (function($){
        function roleControl(){
            this.init();
        }
        roleControl.prototype.init=function(){
            $(".roleType").click(function(){
                var type= $(this).attr("id");
                var data = roleService.query(type);
                       role.resetUserList(data);
            });
            $("#userList").find("li").bind("click",function(){
                $(this).addClass("currentUser")
            });
        }
        $(function(){
            new roleControl ();
        })
    })($)
});