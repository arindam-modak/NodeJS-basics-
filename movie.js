function printAvatar() {
    console.log("Avatar: PG-13");

}

function printChappie() {
    console.log("Chappie: R");
}

module.exports.avatar = printAvatar;

//2nd way to export functions
/*
module.exports = {
    printAvatar: function() {
        console.log("Avatar");
    },

    printChappie: function() {
        console.log("Chappie");
    },

    favMovie: "The Matrix"
};

*/