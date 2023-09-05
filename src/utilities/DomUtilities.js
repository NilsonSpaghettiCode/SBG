//Inputs Mark
const ID_LAT = "frm-lat"
const ID_LON = "frm-lon"


function getElementById(id)
{
    return document.getElementById(id)
}

function controllerMark(params=null) {
    let lat = parseFloat(getElementById(ID_LAT).value)
    let lon = parseFloat(getElementById(ID_LAT).value)
    console.log(lat,lon)
    addMark(lat, lon)
}