// Obtenemos los valores guardados
export const getLocalEmpty = name => JSON.parse(localStorage.getItem(name)) || []

// Obtenemos los valores guardados
export const getLocal = name => JSON.parse(localStorage.getItem(name))

// Guardamos los nuevos valores
export const setLocal = (name, data) => localStorage.setItem(name, JSON.stringify(data))