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

    else {
        grade = "E";
    }
    
}    