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
    var Rank = require ("./rank");
    var rank = new Rank ([{rank:"1",nick:"湿弟",integral:"365210"},{rank:"2",nick:"尸兄",integral:"332210"},{rank:"3",nick:"尸姐",integral:"315210"}]);
    rank.init ();
    //服务层
    var RankService = require ("./rankService");
    var rankService = new RankService();
    //控制层
    (function($){
        function rankControl(){
            this.ranktype="";
            this.init();
        }
        rankControl.prototype.init=function(){
            var self =this;
            $("#rankType").find("a").click(function(){
                self.ranktype= $(this).attr("id");
                //var data = rankService.query(self.ranktype);
                var data = [{rank:"1",nick:"王菲",integral:"365210"},{rank:"1",nick:"考试",integral:"332210"},{rank:"1",nick:"二恶",integral:"315210"}];
                rank.resetRankList(data);
            });

        }
        $(function(){
            new rankControl ();
        })
    })($)

});