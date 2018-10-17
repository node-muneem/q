const qs = require("qs");

module.exports = function(app, globalOptions){
    app.addToAsked("q", function(param, options) {

        if( !this.queryParam ){
            this.queryParam = qs.parse(this.queryStr, options || globalOptions);
        }

        if(param){
            return this.queryParam[ param ];
        }else{
            return this.queryParam;
        }
    })
}