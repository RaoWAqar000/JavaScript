const form = document.querySelector('form')

form.addEventListener('submit', function(e){
    e.preventDefault();

    const height = parseInt(document.querySelector('#height').value)
    const weight = parseInt(document.querySelector('#weight').value)
    const result = document.querySelector('#result')

    if(height == '' || height < 0 || isNaN(height)){
        result.innerHTML = `Please give a valid height ${height}`
    }
    else if(weight == '' || weight < 0 || isNaN(weight)){
        result.innerHTML = `Please give a valid weight ${weight}`
    }
    else{
        const bmi = (weight / ((height*height)/10000)).toFixed(2)
        // result.innerHTML = `${bmi}`
        let bmiCategory = '';

        if(bmi < 18.6){
            bmiCategory = 'Under-weight'
        }
        else if(bmi >18. && bmi < 24.9){
            bmiCategory = 'Normal-weight'
        }
        else if(bmi > 24.9 && bmi < 30){
            bmiCategory = 'Over-weight'
        }
        else{
            bmiCategory = 'Obese'
        }

        result.innerHTML = `Your bmi is ${bmi} and you are ${bmiCategory} `
    }
})