/**
 * Created with JetBrains WebStorm.
 * User:Why
 * Date: 14-1-14
 * Time: 下午2:07
 * To change this template use File | Settings | File Templates.
 */
define(function(require, exports, module){
    var $ = require("jQuery");

    module.exports = function (){
        return {
            query : function(id){
                console.log(id);
              /*  var self=this,url="";
                if(!name||""===name){
                    url="json/user.json";
                }else{
                    url="json/someOne.json";
                }
                return self.getData(url);*/
            } ,
            getData:function(url){
                var result=[];
                $.ajax({
                    url:url,
                    async: false,
                    dataType:"json",
                    success :function(data){
                        result = data;
                    }
                });
                return result
            }
        }
    };
});

