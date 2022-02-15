export function useLocalStorage($router) {
  window.addEventListener("beforeunload", (event) => {
    event.preventDefault()
    event.returnValue = ""
    localStorage.name = $router.currentRoute.value.name
    localStorage.direction = $router.currentRoute.value.params.direction
    localStorage.time = $router.currentRoute.value.params.time
  })
}
