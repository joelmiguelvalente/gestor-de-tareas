const data = new Date()
// Wed Oct 14 2020 14:14:24 GMT-0600 (Ciudad de México Standard Time)
data.toLocaleDateString('es-AR')
// "10/14/2020"
const dataOptions = {
   weekend: 'long',
   year: 'numeric',
   month:'long',
   day: 'numeric'
}
data.toLocaleDateString('es-AR', dataOptions)
// 28 de agosto de 2020

data.toLocaleTimeString()
// “9:04:54 AM”

const horarioOptions = {
   hour12: false,
   hour: 'numeric',
   minute: '2-digit',
   second: '2-digit', 
   timeZone: 'America/Argentina/Buenos_Aires'
}
data.toLocaleTimeString('es-AR', horarioOptions)
// “9:04:54”

data.toLocaleString('es-AR', {
   ...dataOptions, 
   ...horarioOptions
})
// “28 de agosto de 2020 9:04:54”

const formataData = new Intl.DateTimeFormat('es-AR', {
   ...dataOptions,
   ...horarioOptions
})

formataData.format(data)
// “28 de agosto de 2020 9:04:54”