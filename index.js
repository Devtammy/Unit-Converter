const digit = 30
const meterAndFeet = document.getElementById('len')
const litersAndGallons = document.getElementById('vol')
const kilosAndPounds = document.getElementById('mas')
const number = document.getElementById('digit')
const toFeet =  (digit * 3.28084).toFixed(3)
const toMeters = (digit / 3.28084).toFixed(3)
const toGallons = (digit * 0.264).toFixed(3)
const toLiters = (digit * 3.785).toFixed(3)
const toPounds = (digit * 2.2046226218).toFixed(3)
const toKilos = (digit * 0.45359237).toFixed(3)


number.textContent = digit
meterAndFeet.textContent = `${digit} meters = ${toFeet} feet | ${digit} feet = ${toMeters} meters`
litersAndGallons.textContent = `${digit} liters = ${toGallons} gallons | ${digit} gallons = ${toLiters} liters`
kilosAndPounds.textContent = `${digit} pounds = ${toKilos} kilos | ${digit} kilos = ${toPounds} pounds`
