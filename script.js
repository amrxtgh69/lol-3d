const BACKGROUND = "#101010"
const FOREGROUND = "#50FF50"
const game = document.getElementById("game")
game.width = 800
game.height = 800
const ctx = game.getContext("2d")

function clear() {
  ctx.fillStyle = BACKGROUND
  ctx.fillRect(0, 0, game.width, game.height)
}
