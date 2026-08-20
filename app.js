const convertBtn = document.getElementById('convert')
const metersInFeet = document.getElementById('meters-in-feets')
const feetInMeters = document.getElementById('feets-in-meters')
const litersInGallons = document.getElementById('liters-in-gallons')
const gallonsInLiters = document.getElementById('gallons-in-liters')
const kilosInPounds = document.getElementById('kilos-in-pounds')
const poundsInKilos = document.getElementById('pounds-in-kilos')



convertBtn.addEventListener('click', function() {
    const inputValue = Number(document.getElementById('input-nmb').value)
    
    metersInFeet.textContent = inputValue + ' meters = ' + (inputValue * 3.281).toFixed(2) + ' feets'
    feetInMeters.textContent = inputValue + ' feets = ' + (inputValue / 3.281).toFixed(2) + ' meters'

    litersInGallons.textContent = inputValue + ' liters = ' + (inputValue / 3.785).toFixed(2) + ' gallons'
    gallonsInLiters.textContent = inputValue + ' gallons = ' + (inputValue * 3.785).toFixed(2) + ' liters'

    kilosInPounds.textContent = inputValue + ' kilos = ' + (inputValue * 2.205).toFixed(2) + ' pounds'
    poundsInKilos.textContent = inputValue + ' pounds = ' + (inputValue / 2.205).toFixed(2) + ' kilos'
    
})