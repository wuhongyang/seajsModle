/**
 * Created with JetBrains WebStorm.
 * User: Administrator
 * Date: 14-1-9
 * Time: 下午2:07
 * To change this template use File | Settings | File Templates.
 */
define(function(require, exports, module){
    var $= require ("jquery");


       module.exports = function (){
        return {
            query : function(name){
                var self=this,url="";
                if(!name||""===name){
                    url="json/user.json";
                }else{
                    url="json/someOne.json";
                }
                return self.getData(url);
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
                /*$http.get(url).success (function(data){
                   console.log(2);
                });*/
                return result
            }
        }
    };
});

