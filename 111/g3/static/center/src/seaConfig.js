/**
 * Created with JetBrains WebStorm.
 * User: Administrator
 * Date: 14-1-9
 * Time: 下午2:01
 * To change this template use File | Settings | File Templates.
 */
seajs.config({
    base: "../modules/",
    alias: {
        "jquery": "jquery/jquery/1.10.1/jquery.js"
    }
});
// For development
    if (location.href.indexOf("?dev") < 0) {
    seajs.use("../static/table-angular/src/main",function(main){
        main.init();
    });
}
// For production
else {
    seajs.use("examples/table-angulaer/1.0.0/main");
}