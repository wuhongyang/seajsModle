/**
 * Created with JetBrains WebStorm.
 * User: Administrator
 * Date: 14-1-9
 * Time: 下午2:07
 * To change this template use File | Settings | File Templates.
 */
define(function(require, exports, module){
    function Rank(callBack) {
        this.options={};
        this.tmpl = '<tr><td>${rank}</td><td >${nick}</td><td>${integral}</td></tr>';
        this.initRank();
    }
    Rank.prototype.init=function(){
        var self = this;
        self.resetRankList(self.options);
    }
    Rank.prototype.resetRankList=function(data){
        var $rankTable= $("#rankTable");
        $rankTable.empty();
        $.template("template", this.tmpl);
        $rankTable.html($.tmpl("template", data));
    }
    Rank.prototype.initRank=function(){
        var self =this;
        $("#rankType").find("a").click(function(){
            var type = $(this).attr("id");
            callBack(type);
        });

    }
    module.exports = Rank;
});

