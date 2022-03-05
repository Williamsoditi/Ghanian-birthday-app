var form = document.getElementById('form')
// Form Validation to enter correct date format //
validDate = (birthdate) => {
    if (!birthdate || birthdate.split('-').length !== 3){
        alert("Enter Correct Date!");
        return false;
    }
    return true;
}
form.addEventListener('submit'), function (e){
    e.preventDefault();
}
let birthday = form.birthday.value;
let gender = form.gender.value;
