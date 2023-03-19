function calculateGrade() {
    const score = parseInt(document.getElementById("score").value);

    let grade;

    if (score > 100 || score < 0){
        console.log("Not Applicable!");
    }
   
    
    else if (score > 79) {
        grade = "A";
    } 

    else if (score >= 60 && score <= 79) {
        grade = "B";
    }

     else if (score >= 50 && score <= 59) {
        grade = "C";
    } 

    else if (score >= 40 && score <= 49) {
        grade = "D";
    } 

    else if(score >= 0 && score < 40){
        grade = "E";
    }
     
    else //whereby the the score is not in the mentioned range reurn N/A
    console.log("Not Applicable!")
    
    document.getElementById("result").innerHTML = `Student grade is: ${grade}`;
}
 
function getNetSalary(){
    // initialize paye    
    let paye;

    personalRelief = 3000;

    grossSalary = ("Enter your salary: ")

    MhasibuSacco= ("Enter you sacco contribution: ")

    privatepensionDeductions = ("Enter your private pension Deduction: ")

    NHIFDeductions = ("Enter your NHIFDeduction: ")  

    // deductions

    totalDeductions = (NHIFDeductions + MhasibuSacco + personalRelief + privatepensionDeductions);
    taxableIncome = grossSalary - totalDeductions;

    console.log(`your taxableIncome is ksh: ${taxableIncome}`)
    console.log(`your totalDeductions is ksh: ${totalDeductions}`)

    //PAYE 

    switch(true){
        case (taxableIncome <= 30000):
            paye = taxableIncome * 0.18;
            break;

        case (taxableIncome >= 30001 && taxableIncome <= 38333):
            paye = taxableIncome * 0.30;
            break;

        case (taxableIncome > 38333):
            paye = taxableIncome * 0.20;
            break;  

    }
    //achieving the net salary  after all dedutions
    netSalary = (parseInt (taxableIncome - paye));
    console.log(`netSalary is..: ${netSalary}`)
    
}

function checkSpeed() {
	const speedInput = document.getElementById("speed-input");
	const speed = Number(speedInput.value);
	const speedLimit = 70;//checks the value of speed if less or equal to speedLimit. If it is, it sets the "output" to "Ok".
	const kmPerPoint = 5;//represents points charged per km while exceeding limit
    

	if (speed <= speedLimit) {
		document.getElementById("output").textContent = "Ok";
	} else {
		const points = Math.floor((speed - speedLimit) / kmPerPoint);//for every 5kmperhour exceeding the speed limit, user is charged 1 point for it
		if (points >= 10) {//if points exceeds 10, the license of user is removed
			document.getElementById("output").textContent = "License removed";
		} else {
			document.getElementById("output").textContent = `Points: ${points}`;
		}
	}
}
