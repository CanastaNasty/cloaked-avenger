This file is the connection between the view and the backend

    Game = (I = {}) ->
      self = Model I
      self.observeAll()
      
      self.tenp = ->
        self.points(self.points() + 10)
        
The NewGame function populates the country with cities
      self.newGame = ->
        pops = []
        num = 10
        num.times (i) ->
          n = Math.random()
          pops[i] = n * n * n
        pops.sort().reverse()
        num.times (i) ->
          self.cities.push
            name: "City " + i
            population: (1 + pops[i] * 25)
      
      return self
      
    module.exports = Game