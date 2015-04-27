/**
 * Created with JetBrains WebStorm.
 * Author: Why
 * Date: 14-1-9
 * Time: 下午2:13
 * To change this template use File | Settings | File Templates.
 */
define("examples/table-angular/1.0.0/main-debug", [ "./user-debug", "jquery-debug" ], function(require, exports, module) {
    var uesrCtrl = angular.module("USER", []);
    var userService = require("./user-debug");
    uesrCtrl.service("userService", userService);
    uesrCtrl.controller("UserCtrl", [ "$scope", "userService", function($scope, userService) {
        $scope.userService = userService;
        var data = $scope.userService.query();
        //var data = $scope.userService.getData(url);
        $scope.users = data;
        $scope.query = function() {
            var name = $scope.name || "";
            var newData = $scope.userService.query(name);
            $scope.users = newData;
        };
    } ]);
    return {
        init: function() {
            angular.bootstrap(document.body, [ "USER" ]);
        }
    };
});

/**
 * Created with JetBrains WebStorm.
 * User: Administrator
 * Date: 14-1-9
 * Time: 下午2:07
 * To change this template use File | Settings | File Templates.
 */
define("examples/table-angular/1.0.0/user-debug", [ "jquery-debug" ], function(require, exports, module) {
    var $ = require("jquery-debug");
    module.exports = function() {
        return {
            query: function(name) {
                var self = this, url = "";
                if (!name || "" === name) {
                    url = "json/user.json";
                } else {
                    url = "json/someOne.json";
                }
                return self.getData(url);
            },
            getData: function(url) {
                var result = [];
                $.ajax({
                    url: url,
                    async: false,
                    dataType: "json",
                    success: function(data) {
                        result = data;
                    }
                });
                /*$http.get(url).success (function(data){
                   console.log(2);
                });*/
                return result;
            }
        };
    };
});
