/**
 * Created with JetBrains WebStorm.
 * Author: Why
 * Date: 14-1-9
 * Time: ����2:13
 * To change this template use File | Settings | File Templates.
 */
define(function(require,exports,module){
//数据
    var $user ={user:{name:"~上官云",img:""},id:"(880258)"};
    var $notice ="房间10001，我的麦克风（1000012）向浪漫樱花（20123058）送了游戏1个";
    var $sofa = {data:[{id:"a",title:"当前有2个沙发",text:"上官小云"},{id:"b",title:"当前有8个沙发",text:"多情段公子"}]};
    var $rank =[{rank:"1",nick:"尸兄",integral:"365210"},{rank:"2",nick:"尸姐",integral:"332210"},{rank:"3",nick:"尸弟",integral:"315210"},{rank:"3",nick:"尸妹",integral:"315210"}];
    var $role = [
                   {id:"1001",anchor:"小鱼儿",VIP:"VIP3级",account:"30256302",rich:"富豪5级"},
                   {id:"1007",anchor:"大玉儿",VIP:"VIP3级",account:"30256302",rich:"富豪5级"}
                 ]




    //导航栏
    var Header = require ("/static/header/src/header");
    var header = new Header (callBack);
    header.resetBase($user);
    header.resetImg("app/src/img/logo.jpg");
	//房间公告��
	var Notice = require ("/static/notice/src/notice");
    var notice = new Notice (callBack);
    notice.resetNotice($notice);
	//沙发
    var Sofa = require ("/static/sofa/src/sofa");
    var sofa = new Sofa(callBack);
    sofa.resetSofa($sofa);
    //排行���
    var Rank = require ("/static/rank/src/rank");
    var rank = new Rank (callBack);
    rank.resetRankList($rank);
	//送礼、道具�����
	var Deal = require ("/static/deal/src/deal");
    var deal = new Deal (callBack);
	 //角色列表
    var Role = require ("/static/role/src/role");
    var role = new Role (callBack);
    role.resetUserList($role);
	 //主播���
	var Host = require ("/static/host/src/host");
    var host = new Host ({data:{}},callBack);
});