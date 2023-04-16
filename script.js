// DOM selector variables
var input = document.getElementById("entry");
var button = document.getElementById("btn");
var error = document.getElementById("error");
var dname = document.getElementById("name");
var dfname = document.getElementById("fname");
var drollno = document.getElementById("rollno");
var dredgno = document.getElementById("redgno");
var databox = document.querySelector('.data');
var resultbox = document.querySelector('.result')
// Class for students data entry
class student{
    constructor(Name="Not Enter",rollnumber="Not Enter",fathername="Not Enter",regdnumber="Not Enter"){
        this.name = Name;
        this.rollno = rollnumber;
        this.fname = fathername;
        this.redgno = regdnumber;
    }
    entry(PF="Not Enter",PFL="Not Enter",ITC="Not Enter",ITCL="Not Enter",Calculus="Not Enter",FE="Not Enter",APHY="Not Enter",APHYL="Not Enter",Workshop="Not Enter"){
        this.pf = PF;
        this.pfl = PFL;
        this.itc = ITC;
        this.itcl = ITCL;
        this.calculus = Calculus;
        this.fe = FE;
        this.aphy = APHY;
        this.aphyl = APHYL;
        this.workshop = Workshop;
    }
}
// Objects for students data entry
var students = [];
students[0] = new student("Reshail Kareem", 500, "Abdul Kareem" , "2022 CS-500");
students[0].entry("A+","A+","A+","A+","A+","A+","A+","A+","A+");
students[1] = new student("Muhmmad Abdullah", 525, "Zahid Mehmood" ,"2022 CS-525");
students[1].entry("A","A-","A","A","C-","A-","B-","B+","B-");
// Main Function
$(document).ready(function(){
    $(button).click(function(){
        var checkflag = false;
        for(let i = 0; i<students.length;i++){
            if(students[i].rollno == input.value){
                $(databox).fadeIn("slow");
                databox.style.display = "flex";
                $(error).fadeOut("slow");
                display(i);
                checkflag = true;
                break;
            }
        }
        if(checkflag == false){
            $(databox).fadeOut();
            $(error).fadeIn();
        }
    });
}); 
// Functions
var display = (x)=>{
    dname.innerHTML = students[x].name;
    dfname.innerHTML = students[x].fname;
    drollno.innerHTML = students[x].rollno;
    dredgno.innerHTML = students[x].redgno;
}