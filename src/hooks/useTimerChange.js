import { sleep } from "./useDelay"

export const timerDuration = { red: 10, yellow: 3, green: 15 }
export const steps = ["red", "yellow", "green"]

let direction = ""
let timeLeft = ""
let nextName = ""
let i = ""

export async function loop(router, directions, times, names) {
  i = steps.indexOf(names)
  direction = directions
  timeLeft = times
  nextName = names
  return checkTrafficLight(i, direction, timeLeft, nextName).then((result) => {
    router.push({
      name: result.nextName,
      params: {
        direction: result.direction,
        isActive: result.nextName,
        time: result.timeToEnd,
      },
    })
    return loop(router, result.direction, result.timeToEnd, result.nextName)
  })
}

async function checkTrafficLight(i, direction, timeLeft, nextName) {
  await sleep(1000).then(() => {
    if (timeLeft == 0) {
      if (direction === "forwards" && steps[i] === "red") {
        direction = "forwards"
        i += 1
        nextName = steps[i]
      } else if (direction === "forwards" && steps[i] === "yellow") {
        direction = "forwards"
        i += 1
        nextName = steps[i]
      } else if (direction === "forwards" && steps[i] === "green") {
        direction = "backwards"
        i -= 1
        nextName = steps[i]
      } else if (direction === "backwards" && steps[i] === "green") {
        direction = "backwards"
        i -= 1
        nextName = steps[i]
      } else if (direction === "backwards" && steps[i] === "yellow") {
        direction = "backwards"
        i -= 1
        nextName = steps[i]
      } else if (direction === "backwards" && steps[i] === "red") {
        direction = "forwards"
        i += 1
        nextName = steps[i]
      }
      timeLeft = timerDuration[nextName]
    }
  })
  timeLeft -= 1
  return { timeToEnd: timeLeft, direction: direction, nextName: nextName }
}
