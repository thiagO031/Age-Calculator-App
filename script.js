const enviar = document.querySelector("#enviar")

enviar.addEventListener("click", () => {

    let year = document.querySelector("#year")
    let = resultValue = document.querySelector("#result-years")

    let valueYear = year.value

    let actualYear = new Date()
    let actualYearToday = actualYear.getFullYear()
    
    let resultYear = (actualYearToday - valueYear)


    resultValue.innerText = resultYear

    // resultValue.style.color = 'brown'
    
    // console.log(resultYear)
    

})





