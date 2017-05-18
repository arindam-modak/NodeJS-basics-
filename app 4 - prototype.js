function user() {
    this.name = "";
    this.life = 100;
    this.givelife = function givelife(targetplayer) {
        targetplayer.life += 1;
        console.log(this.name + " give 1 life to " + targetplayer.name);
    }
}

var adm = new user();
var velli = new user();
adm.name = "adm";
velli.name = "velli";

adm.givelife(velli);
console.log("adm: " + adm.life);
console.log("velli: " + velli.life);

user.prototype.uppercut = function uppercut(targetplayer) {
    targetplayer.life -= 3;
    console.log(this.name + " just uppercutted " + targetplayer.name);
};

velli.uppercut(adm);
console.log("adm: " + adm.life);
console.log("velli: " + velli.life);

user.prototype.power = 80;
console.log(adm.power);
console.log(velli.power);
