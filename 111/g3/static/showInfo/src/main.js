/**
 * Created with JetBrains WebStorm.
 * Author: Why
 * Date: 14-1-9
 * Time: 下午2:13
 * To change this template use File | Settings | File Templates.
 */
define(function(require,exports,module){
    var uesrCtrl = angular.module ("USER",[]);
    var userService= require ("./user");

    uesrCtrl.service ("userService",userService);

    uesrCtrl.controller ("UserCtrl",["$scope","userService" ,function($scope,userService){
        $scope.userService = userService;
        var data = $scope.userService.query();
        //var data = $scope.userService.getData(url);
        $scope.users=data;
        $scope.query=function(){
            var name = $scope.name||"";
            var newData = $scope.userService.query(name);
            $scope.users=newData;

        }
    }]);

    return {
        init: function() {
            angular.bootstrap(document.body, ['USER'])
        }
    }
});