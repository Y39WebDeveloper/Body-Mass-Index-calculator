const inputs = document.querySelectorAll(".calculator .data-inputs input[type='number']")
const radios = document.querySelectorAll(".calculator input[type='radio']")
const metric = document.getElementById("metric")
const imperial = document.getElementById("imperial")
const cm = document.getElementById("cm")
const kg = document.getElementById("kg")
const ft = document.getElementById("ft")
const inch = document.getElementById("in")
const st = document.getElementById("st")
const ibs = document.getElementById("ibs")
const result = document.getElementById("result")
const resultTxt = document.getElementById("resultTxt")

inputs.forEach(input => {
    input.addEventListener("input", ()=>{
        if(metric.checked){
            console.log("metric")
            result.innerHTML = Math.round((kg.valueAsNumber/(cm.valueAsNumber/(10*10)*cm.valueAsNumber/(10*10)))*10)/10
        }else if(imperial.checked){
            console.log("imperial")
            result.innerHTML = Math.round((703*(st.valueAsNumber*14 + ibs.valueAsNumber)/((ft.valueAsNumber*12+inch.valueAsNumber)*(ft.valueAsNumber*12+inch.valueAsNumber)))*10)/10
        }
    })
})