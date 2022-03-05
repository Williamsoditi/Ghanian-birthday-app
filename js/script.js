var form = document.getElementById('form')
// Form Validation to enter correct date format //
validDate = (birthday) => {
    if (!birthday || birthday.split('-').length !== 3){
        alert("Enter Correct Date!")
        return false
    }
    return true
}