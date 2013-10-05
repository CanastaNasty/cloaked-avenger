(function() {
  var Game, game, template;

  Game = require("./game");

  game = Game({
    points: 500,
    cities: []
  });

  template = require("./templates/main");

  $("body").append(template(game));

}).call(this);

//# sourceURL=main.coffee