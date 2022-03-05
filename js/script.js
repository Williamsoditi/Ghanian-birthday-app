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

    let birthdate = form.birthdate.value;
    let gender = form.gender.value;

    // form validation
    if(validDate(birthdate)){

        var splitDate = birthday.split('-')

        var akanNames = {
            female:{
                sunday:"Akosua",
                monday:"Adwoa",
                tuesday:"Abenaa",
                wednesday:"Akua",
                thursday:"Yaa",
                friday:"Afua",
                saturday:"Ama",
            },
            male:{
                sunday:"Kwasi",
                monday:"Kwadwo",
                tuesday:"Kwabena",
                wednesday:"Kwaku",
                thursday:"Yaw",
                friday:"Kofi",
                saturday:"Kwame",
            }
        }

        var weekDays = [ "monday","tuesday","wednesday","thursday","friday","saturday","sunday"];
    }
}

