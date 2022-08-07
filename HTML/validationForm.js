const firstname = document.getElementById('firstname')
const lastname = document.getElementById('lastname')
const age = document.getElementById('age')
const country = document.getElementById('country')
const email = document.getElementById('email')
const password = document.getElementById('password')
const form = document.getElementById('form')
const errorEle = document.getElementById('error')

form.addEventListener('submit', (e) => {
    let messages = []
    if(firstname.value === '' || firstname.value == null){
        messages.push('*Firstname is required')
    }
    if(lastname.value === '' || lastname.value == null){
        messages.push('*Lastname is required')
    }
    if(age.value <= 18){
        messages.push('age should be greater 18')
    }
    if(country.value !== India){
        messages.push('You are a foreigner! Valid for Indians only')
    }
    if(password.length <= 6){
        messages.push('password should be longer than 6 letters')
    }
    if(password.length > 20){
        messages.push('password should not be greater than 20 letters')
    }
    if(messages.length>0){
        e.preventDefault()
        errorEle.innerText = messages.join(', ')
    }

})