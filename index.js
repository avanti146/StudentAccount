let name, reg, mail, ph, dob, age, prog;
let name1, reg1, mail1, ph1, dob1, age1, prog1;

function disp() {

            document.getElementById("conf").style.display = "block";

            //getting values from input in html
            name = document.getElementById("name").value;
            reg = document.getElementById("reg").value;
            mail = document.getElementById("mail").value;
            ph = document.getElementById("ph").value;
            dob = document.getElementById("dob").value;
            age = document.getElementById("age").value;
            prog = document.getElementById("prog").value;

            //getting element by id
            name1 = document.getElementById("name1");
            reg1 = document.getElementById("reg1");
            mail1 = document.getElementById("mail1");
            ph1 = document.getElementById("ph1");
            dob1 = document.getElementById("dob1");
            age1 = document.getElementById("age1");
            prog1 = document.getElementById("prog1");

            //displaying the obtained input in the headers
            name1.innerHTML = name;
            reg1.innerHTML = reg;
            mail1.innerHTML = mail;
            ph1.innerHTML = ph;
            dob1.innerHTML = dob;
            age1.innerHTML = age;
            prog1.innerHTML = prog;
}

function showp() {

            document.getElementById("pas").style.display = "block";
}

function checkpas(){

            let p, p1;
            p = document.getElementById("pass").value;
            p1 = document.getElementById("pass1").value;

            if (p === p1) {
                document.getElementById("box3").style.display = "block";
            }
            else {
                window.alert("Passwords do not match");
            }
}
