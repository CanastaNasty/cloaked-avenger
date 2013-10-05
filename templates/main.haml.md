This is the main view that the game is played from.

    %h1 Mass Politics!
    %button New Game
      - on "click", @newGame
    %button +10
      - on "click", @tenp
    - game = this
    %ul
      - each @cities, (city) ->
        %li= city.name + ": " + city.population.toFixed(2) + " million"
          - on "click", -> alert city.name
    %p= @points