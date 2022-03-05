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

        var splitted_date = birthday.split('-')

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

        var weekdays = [ "monday","tuesday","wednesday","thursday","friday","saturday","sunday"];

        let valid_date = new Date(splitted_date[0],splitted_date[1],splitted_date[2]);
        let weekday_index = valid_date.getDay();
        let weekday_name = weekdays[weekday_index];

        let possible_names = akan_names[gender];
        let akanNames = possible_names[weekday_name];
    }
}

