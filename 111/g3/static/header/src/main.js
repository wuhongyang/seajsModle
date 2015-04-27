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
    var Header = require ("./header");
    var header = new Header ({user:{name:"王琴",code:"25055124"},id:"header"});
    header.init ();

    //服务层
    var HeaderService = require ("./headerService");
    var headerService = new HeaderService();



    //控制层
    (function($){
        function headerControl(){
            this.init();
        }
        headerControl.prototype.init=function(){
            $(".subnavItem").click(function(){
                var turnTo= $(this).attr("id");
                var data = headerService.query(turnTo);
            });
        }
        $(function(){
            new headerControl ();
        })
    })($)


});