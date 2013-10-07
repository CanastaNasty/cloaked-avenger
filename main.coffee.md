    Game = require "./game"
    game = Game
      points: 500
      cities: []

    template = require "./templates/main"

    $("body").append template(game)
