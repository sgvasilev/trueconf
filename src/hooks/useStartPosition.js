import { timerDuration, steps } from "../hooks/useTimerChange"

export function useStartPosition(router) {
  const lsTime = localStorage?.time
  const lsName = localStorage?.name
  const lsDirrection = localStorage?.direction
  const currRoute = router.currentRoute.value.name

  if (
    lsTime !== undefined &&
    lsName !== undefined &&
    lsDirrection !== undefined
  ) {
    if (currRoute === lsName) {
      return {
        direction: lsDirrection,
        time: lsTime,
        name: lsName,
      }
    } else {
      return {
        direction: "forwards",
        time: timerDuration[currRoute],
        name: currRoute,
      }
    }
  } else {
    return {
      direction: "backwards",
      time: timerDuration["green"],
      name: "green",
    }
  }
}
