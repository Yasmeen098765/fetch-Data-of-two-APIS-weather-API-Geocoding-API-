const forecast = require("./data1/forecast")
const geocode = require("./data1/geocode")
const country = process.argv[2]

geocode(country, (error, data) => {
    if (error) {
        console.log("--------------------------------------------<ERROR>----------------------------------------------")
        console.log("ERROR : ", error)
        console.log("-------------------------------------------------------------------------------------------------")
    } else if (data) {
        forecast(data.latitude, data.longtitude, (error, data1) => {
            if (error) {
                console.log("--------------------------------------------<DATA>----------------------------------------------")
                console.log("latitude : " + data.latitude + " , longtitude : " + data.longtitude)
                console.log("-------------------------------------------------------------------------------------------------\n")
                console.log("--------------------------------------------<ERROR>----------------------------------------------")
                console.log("ERROR : ", error)
                console.log("-------------------------------------------------------------------------------------------------")
            } else if (data1) {
                console.log("--------------------------------------------<DATA>----------------------------------------------")
                console.log(data1 + "\nlatitude : " + data.latitude + " , longtitude : " + data.longtitude)
                console.log("-------------------------------------------------------------------------------------------------")
            }
        })
    }
})















