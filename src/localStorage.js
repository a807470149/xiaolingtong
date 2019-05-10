export const setStore = (name, content) => {
  localStorage.setItem(name, content)
}

export const getStore = name => {
  localStorage.getItem(name)
}

export const removeStore = name => {
  localStorage.removeItem(name)
}