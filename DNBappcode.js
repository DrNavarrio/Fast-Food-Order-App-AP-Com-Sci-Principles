var burgerDropDown;
var midWestFavDropDown;
var sigSidesDropDown;
var drinkDropDown;

var burgerDropDown = "$3";
var midWestFavDropDown = "$3";
var sigSidesDropDown = "$3";
var drinkDropDown = "$2";

updateScreen();
function updateScreen() {
  onEvent("placeOrderButton", "click", function( ) {
    setScreen("orderScreen");
    playSound("sound://category_achievements/vibrant_game_game_gold_tresure_chest_open.mp3", false);
  });
  onEvent("orderScreenNextButton", "click", function( ) {
    setScreen("finalOrderScreen");
    playSound("sound://category_achievements/vibrant_game_game_gold_tresure_chest_open.mp3", false);
  });
  onEvent("menuButton", "click", function( ) {
    setScreen("menuScreen");
    playSound("sound://category_achievements/vibrant_game_game_gold_tresure_chest_open.mp3", false);
  });
  onEvent("menuBackButton", "click", function( ) {
    setScreen("homeScreen");
    playSound("sound://category_achievements/vibrant_game_game_gold_tresure_chest_open.mp3", false);
  });
  onEvent("aboutButton", "click", function( ) {
    setScreen("aboutScreen");
    playSound("sound://category_achievements/vibrant_game_game_gold_tresure_chest_open.mp3", false);
  });
  onEvent("aboutScreenBackButton", "click", function( ) {
    setScreen("homeScreen");
    playSound("sound://category_achievements/vibrant_game_game_gold_tresure_chest_open.mp3", false);
  });
}

onEvent("orderScreenNextButton", "click", function( ) {
  setScreen("finalOrderScreen");
 setText("orderTotalText", getText("burgerDropDown") + ", "+ getText("midWestFavDropDown") + ", " + getText("sigSidesDropDown") + ", " + getText("drinkDropDown"));
   
});
