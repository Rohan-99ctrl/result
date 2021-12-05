students.map((data, index) => {


    console.log(`

        ${index + 1}|
        --------
        Student Name        : ${data.nam}
        Student Roll        : ${data.roll}
        Father's Name       : ${data.fname}
        Mother's Name       : ${data.mname}
        Student CGPA        : ${leader.finalResult(data.bn, data.en, data.math, data.sci, data.socity, data.rel).cgpa}
        Student Grade       : ${leader.finalResult(data.bn, data.en, data.math, data.sci, data.socity, data.rel).fGrade}

        MARKS SHEET :

        SUBJECT         MARKS           GPA             GRADE
        ---------------------------------------------------------------------
        Bangla          ${data.bn}              ${leader.result(data.bn).gpa}              ${leader.result(data.bn).grade}
        English         ${data.en}              ${leader.result(data.en).gpa}              ${leader.result(data.en).grade}
        Math            ${data.math}              ${leader.result(data.math).gpa}              ${leader.result(data.math).grade}
        Science         ${data.sci}              ${leader.result(data.sci).gpa}              ${leader.result(data.sci).grade}
        Socity          ${data.socity}              ${leader.result(data.socity).gpa}              ${leader.result(data.socity).grade}
        Religion        ${data.rel}              ${leader.result(data.rel).gpa}              ${leader.result(data.rel).grade}

    `);


});















