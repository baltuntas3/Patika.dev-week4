//All required routes
const express = require('express')
const vehicleRouter = require('./routes/vehicle')
const deviceRouter = require('./routes/vehicle')
const deviceTypeRouter = require('./routes/vehicle')
const logTemperatureRouter = require('./routes/vehicle')
const logLocationRouter = require('./routes/vehicle')
require("./database_connection")

const app = express()
app.use(express.json())

app.use('/vehicles', vehicleRouter)
app.use('/device', deviceRouter)
app.use('/device_type', deviceTypeRouter)
app.use('/log_temperature', logTemperatureRouter)
app.use('/log_location', logLocationRouter)

app.listen(3000, () => {
  console.log('Server listening')
})
