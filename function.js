


agecal = (name, year) => {
    let date = new Date();
    let age = date.getFullYear() - year;

    let  agestatus = checkAgeStatus(age);
    return `<p class = "alert alert-${agestatus.status}">Hi ${name}, You are ${age} years old and You are a ${agestatus.name}</p>`
    
}

/** 
 * 
 * @param {*} age 
 * @returns 
 */
 function checkAgeStatus(age) {
    if(age > 0 && age < 10){
        return {
            name : 'Babu',
            status : 'success'
        }
    }else if(age >= 10 && age < 18){
        return {
            name : 'Kishor',
            status : 'info'
        }
    }else if(age >= 18 && age < 35){
        return {
            name : 'Jubok',
            status : 'warning'
        }
    }else if(age >= 35 && age < 60){
        return {
            name : 'Boyosko',
            status : 'primary'
        }
        
    }else if(age >= 60 && age < 150){
        return {
            name : 'Breddo',
            status : 'denger'
        }
    }else{
        return {
            name : 'Jin or Bhut',
            status : 'dark'
        }
        
    }
}

// // 3. marriage age check calculator for male and female with status






