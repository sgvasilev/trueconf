let steps = ["red", "yellow", "green"]
let timerDuration = [1000, 1500, 2000]
let direction = "forwards"
let start = true
let i = 0
let frame = ""
const sleep = (ms) => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(), ms)
  })
}
function renew() {
  return function () {
    sleep(timerDuration[i]).then(() => {
      console.log(steps[i])
      if (steps[i] === "red") {
        direction = "forwards"
        i += 1
      } else if (steps[i] === "green") {
        direction = "backwards"
        i -= 1
      } else if (direction === "forwards") {
        i += 1
      } else {
        i -= 1
      }
      startaa()
    })
  }
}
let startLoop = renew()
startLoop()
