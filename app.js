const convertBtn = document.getElementById('convert')
const metersInFeet = document.getElementById('meters-in-feets')
const feetInMeters = document.getElementById('feets-in-meters')
const litersInGallons = document.getElementById('liters-in-gallons')
const gallonsInLiters = document.getElementById('gallons-in-liters')
const kilosInPounds = document.getElementById('kilos-in-pounds')
const poundsInKilos = document.getElementById('pounds-in-kilos')



convertBtn.addEventListener('click', function() {
    const inputValue = Number(document.getElementById('input-nmb').value)
    
    metersInFeet.textContent = inputValue + ' meters = ' + (inputValue * 3.281).toFixed(3) + ' feets'
    feetInMeters.textContent = inputValue + ' feets = ' + (inputValue / 3.281).toFixed(3) + ' meters'

    litersInGallons.textContent = inputValue + ' liters = ' + (inputValue / 3.785).toFixed(3) + ' gallons'
    gallonsInLiters.textContent = inputValue + ' gallons = ' + (inputValue * 3.785).toFixed(3) + ' liters'

    kilosInPounds.textContent = inputValue + ' kilos = ' + (inputValue * 2.205).toFixed(3) + ' pounds'
    poundsInKilos.textContent = inputValue + ' pounds = ' + (inputValue / 2.205).toFixed(3) + ' kilos'

})