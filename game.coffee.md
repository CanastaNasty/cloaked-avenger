    Game = (I = {}) ->
      self = Model I
      self.observeAll()
      
      self.click = ->
        self.points(self.points() + 10)
      
      return self
      
    module.exports = Game