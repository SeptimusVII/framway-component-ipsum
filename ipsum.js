module.exports = function(app){
    var Ipsum = Object.getPrototypeOf(app).Ipsum = new app.Component("ipsum");
    //Ipsum.debug = true;
    Ipsum.createdAt      = "2.0.0";
    Ipsum.lastUpdate     = "2.0.0";
    Ipsum.version        = "1";
    // Ipsum.factoryExclude = true;
    // Ipsum.loadingMsg     = "This message will display in the console when component will be loaded.";
    // Ipsum.requires       = [];

    Ipsum.prototype.onCreate = function(){
        var ipsum = this;
        ipsum.$el.html('Zombie ipsum reversus ab viral inferno, nam rick grimes malum cerebro. De carne lumbering animata corpora quaeritis. Summus brains sit​​, morbo vel maleficia? De apocalypsi gorger omero undead survivor dictum mauris. Hi mindless mortuis soulless creaturas, imo evil stalking monstra adventus resi dentevil vultus comedat cerebella viventium. Qui animated corpse, cricket bat max brucks terribilem incessu zomby. The voodoo sacerdos flesh eater, suscitat mortuos comedere carnem virus. Zonbi tattered for solum oculi eorum defunctis go lum cerebro. Nescio brains an Undead zombies. Sicut malus putrid voodoo horror. Nigh tofth eliv ingdead.');
        if(ipsum.getData('nb',0)){
            for (var i = 0; i < parseInt(ipsum.getData('nb',1)) - 1; i++) {
                ipsum.$el.clone().insertAfter(ipsum.$el);
            }
        }
    }
    return Ipsum;
}