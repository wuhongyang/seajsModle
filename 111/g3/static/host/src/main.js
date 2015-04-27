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
    var Host = require ("./host");
    var host = new Host ();
   // host.init ();
    //服务层
    var HostService = require ("./hostService");
    var hostService = new HostService();
    //控制层
    (function($){
        function hostControl(){
            this.init();
        }
        hostControl.prototype.init=function(){
            $(".host").find("a").click(function(){
                var id= $(this).parent().parent().attr("id"),sign=$(this).attr("sign"),flag="";
               if("attention" === sign){
                   flag = hostService.attention(id);
               }else if("stow" === sign){
                   flag = hostService.stow(id);
               }
               host.showDialog(flag);
            });
        }
        $(function(){
            new hostControl ();
        })
    })($)

});