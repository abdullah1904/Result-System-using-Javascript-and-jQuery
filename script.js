// DOM selector variables
var input = document.getElementById("entry");
var button = document.getElementById("btn");
var error = document.getElementById("error");
var dname = document.getElementById("name");
var dfname = document.getElementById("fname");
var drollno = document.getElementById("rollno");
var dredgno = document.getElementById("redgno");
var databox = document.querySelector('.data');
var resultbox = document.querySelector('.result');
var DPF = document.getElementById("dpf");
var DPFL = document.getElementById("dpfl");
var DITC = document.getElementById("ditc");
var DITCL = document.getElementById("ditcl");
var DCALCULUS = document.getElementById("dcal");
var DFE = document.getElementById("dfe");
var DAPHY = document.getElementById("daphy");
var DAPHYL = document.getElementById("daphyl");
var DWS = document.getElementById("dws");
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
var students =[];
students[0] = new student("Muhmmad Abdullah", 525, "Zahid Mehmood" ,"2022 CS-525")
students[0].entry("A","A-","A","A","C-","A-","B-","B+","B-");
// Main Function
$(document).ready(function(){
    $(button).click(function(){
        var checkflag = false;
        $(databox).fadeOut("fast");
        $(error).fadeOut("fast");
        $(resultbox).fadeOut("fast");
        for(let i = 0; i<students.length;i++){
            if(students[i].rollno == input.value){
                $(databox).fadeIn("slow");
                databox.style.display = "flex";
                $(resultbox).fadeIn("slow");
                display(i);
                checkflag = true;
                break;
            }
        }
        if(checkflag == false){
            $(error).fadeIn("slow");
        }
    });
}); 
// Functions
var display = (x)=>{
    dname.innerHTML = students[x].name;
    dfname.innerHTML = students[x].fname;
    drollno.innerHTML = students[x].rollno;
    dredgno.innerHTML = students[x].redgno;
    DPF.innerHTML = students[x].pf;
    DPFL.innerHTML = students[x].pfl;
    DITC.innerHTML = students[x].itc;
    DITCL.innerHTML = students[x].itcl;
    DFE.innerHTML = students[x].fe;
    DCALCULUS.innerHTML = students[x].calculus;
    DAPHY.innerHTML = students[x].aphy;
    DAPHYL.innerHTML = students[x].aphyl;
    DWS.innerHTML = students[x].workshop;
}