/**
 * Created with JetBrains WebStorm.
 * User: Administrator
 * Date: 14-1-9
 * Time: 下午2:07
 * To change this template use File | Settings | File Templates.
 */
define(function(require, exports, module){
    function Notice(callBack) {
        this.options = {};
        this.init();
    }
    Notice.prototype.init=function(){
       /* var self = this;
        self.setNotice(this.options);*/
    }
    Notice.prototype.resetNotice = function(notice) {
        var $notice = $("#noticer");
        $notice.text(notice);
    }
    module.exports = Notice;
});

