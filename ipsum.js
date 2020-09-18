module.exports = function(app){
    var Ipsum = Object.getPrototypeOf(app).Ipsum = new app.Component("ipsum");
    //Ipsum.debug = true;
    Ipsum.createdAt      = "2.0.0";
    Ipsum.lastUpdate     = "2.0.0";
    Ipsum.version        = "1";
    // Ipsum.factoryExclude = true;
    // Ipsum.loadingMsg     = "This message will display in the console when component will be loaded.";
    // Ipsum.requires       = [];

    // Ipsum.prototype.onCreate = function(){
    // do thing after element's creation
    // }
    return Ipsum;
}