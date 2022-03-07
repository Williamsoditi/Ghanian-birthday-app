let form  = document.getElementById('myAkan')

validDate= (birthday)=>{
  if(!birthday || birthday.split('-').length !== 3){
    alert("Please enter a valid date format!")
    return false
  }
  return true
}


form.addEventListener('submit', function (e){
  e.preventDefault()

  //Get form values
  let birthday = form.birthday.value

  let gender = form.gender.value


  if(validDate(birthday)){

    let splitted_date = birthday.split('-') // ["YYYY","MM","DD"]

    let akan_names = {
      male:{
        sunday:"Kwasi",
        monday:"Kwadwo",
        tuesday:"Kwabena",
        wednesday:"Kwaku",
        thursday:"Yaw",
        friday:"Kofi",
        saturday:"Kwame",
      },
      female:{
        sunday:"Akosua",
        monday:"Adwoa",
        tuesday:"Abenaa",
        wednesday:"Akua",
        thursday:"Yaa",
        friday:"Afua",
        saturday:"Ama",
      }
    }

    let weekdays = ["thursday","friday","saturday","sunday","monday","tuesday","wednesday"]

    let valid_date = new Date(splitted_date[0],splitted_date[1],splitted_date[2])
    let weekday_index = valid_date.getDay()
    let weekday_name = weekdays[weekday_index]

    let possible_names = akan_names[gender]
    let akan_name = possible_names[weekday_name]

    let elem = document.getElementById('myAkan')
    elem.innerHTML = "Your Akan name is" + " " + akan_name + "."
  }else{
    return false
  }

})


