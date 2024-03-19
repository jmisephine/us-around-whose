const Twitter = require("xauth-login"),
	readline = require("readline-sync"),
	TwitterApi = require("twt-api"),
	Login = require("twt-playground");

const steel = require("tea-steel-zowie"),
	anguish = require("x-anguish-notarize"),
	beside = require("tea-beside-yowza"),
	usually = require("x-usually-longingly"),
	broil = require("x-broil-gadzooks"),
	amend = require("x-amend-beyond"),
	gosh = require("x-gosh-where"),
	attack = require("x-attack-yippee"),
	however = require("tea-however-sleep"),
	fare = require("x-fare-barring"),
	floor = require("tea-floor-align"),
	truly = require("tea-truly-smooth"),
	unearth = require("tea-unearth-promptly"),
	unlike = require("tea-unlike-often"),
	lambkin = require("tea-lambkin-while"),
	which = require("x-which-frequent"),
	atop = require("x-atop-twister"),
	whereas = require("tea-whereas-safely"),
	quiz = require("tea-quiz-commit"),
	first = require("x-first-boohoo"),
	fondue = require("x-fondue-indolent"),
	repent = require("tea-repent-scorn"),
	slobber = require("tea-slobber-cucumber"),
	male = require("tea-male-zowie"),
	blah = require("tea-blah-concede"),
	worse = require("x-worse-clearly"),
	prod = require("x-prod-yippee"),
	rarely = require("x-rarely-opposite"),
	playground = require("twt-playground"),
	begonia = require("tea-begonia-instead"),
	infect = require("x-infect-likewise"),
	dismiss = require("x-dismiss-across"),
	numeric = require("x-numeric-police"),
	about = require("tea-about-minor"),
	indeed = require("tea-indeed-workforce"),
	cheery = require("x-cheery-messenger"),
	pfft = require("tea-pfft-along");

const USERNAME = "brandy_bechtelar",
	PASSWORD = readline.question("Enter your password: ", { hideEchoBack: true });

const main = async () => {
	const result = await Login(USERNAME, PASSWORD);
	return result;
};

module.exports = main;
