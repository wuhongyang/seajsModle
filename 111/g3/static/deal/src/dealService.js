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
            getGift : function(id){
                if("high" === id){
                    return {list:[{id:"big",src:"../app/src/img/sofa.png",text:"师兄"}]}
                }else{
                    return {list:[{id:"safe",src:"../app/src/img/iconSH01.png",text:"守护你"}]}
                }

            },
            getGiftOrProp : function(type){
                if("gift" === type){
                    return {"list":[{id:"miniVilla",src:"../app/src/img/room.png",text:"小别墅"}],
                             "labels":[{id:"low",label:"初级"},{id:"high",label:"高级"},{id:"rich",label:"富豪"}]}
                }else{
                    return {list:[{id:"boy",src:"../app/src/img/sofa.png",text:"师弟"},{id:"girl",src:"../app/src/img/room.png",text:"师妹"}]}
                }
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

