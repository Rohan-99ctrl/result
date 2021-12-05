function ResultSystem(){



    this.result = function(marks){

        let gpa;
        let grade;

        if(marks >= 0 && marks <= 32){
            gpa = 0;
            grade = 'F';
        }else if(marks >= 33 && marks <= 39){
            gpa = 1.00;
            grade = 'D';
        }else if(marks >= 40 && marks <= 49){
            gpa = 2.00;
            grade = 'C';
        }else if(marks >= 50 && marks <= 59){
            gpa = 3.00;
            grade = 'B';
        }else if(marks >= 60 && marks <= 69){
            gpa = 3.50;
            grade = 'A-';
        }else if(marks >= 70 && marks <= 79){
            gpa = 4.00;
            grade = 'A';
        }else if(marks >= 80 && marks <= 100){
            gpa = 5.00;
            grade = 'A+';
        }

        return {
            gpa     : gpa,
            grade   : grade
        };

    }


    this.finalResult = function(bn, en, math, sci, socity, rel){
        let cgpa;
        let finalGrade;
        let total = this.result(bn).gpa + this.result(en).gpa + this.result(math).gpa + this.result(sci).gpa + this.result(socity).gpa + this.result(rel).gpa;
        cgpa = ( total / 6 );

        if(bn < 33 || en < 33 || math < 33 || sci < 33 || socity < 33 || rel < 33){
            finalGrade = 'F';
        }else if(cgpa >= 0 && cgpa < 1){
            finalGrade = 'F';
        }else if(cgpa >= 1 && cgpa < 2){
            finalGrade = 'D';
        }else if(cgpa >= 2 && cgpa < 3){
            finalGrade = 'C';
        }else if(cgpa >= 3 && cgpa < 3.5){
            finalGrade = 'B';
        }else if(cgpa >= 3.5 && cgpa < 4){
            finalGrade = 'A-';
        }else if(cgpa >= 4 && cgpa < 5){
            finalGrade = 'A';
        }else if(cgpa == 5){
            finalGrade = 'A+';
        }

        return {
            cgpa        : ( finalGrade == 'F' ) ? 'Failed' : cgpa.toFixed(2),
            fGrade      : finalGrade
        };

    }



}



let leader = new ResultSystem();











