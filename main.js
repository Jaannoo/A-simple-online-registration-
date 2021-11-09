const form = document.getElementById("res_form");

function res_funtion(){
    var fname = document.getElementById("name").value;
    var gender = document.getElementById("gender").value;
    var brgy = document.getElementById("barangay").value;
    var city = document.getElementById("city").value;
    var country = document.getElementById("country").value;
    var res_date = document.getElementById("date").value;
    var res_time = document.getElementById("time").value;

if(fname == "" || fname == null) {
    alert("Full name is required . . .");
    }
if(gender == "Gender") {
        alert("Please select your gender . . .");
        }
if(brgy == "" || fname == null) {
        alert("Barangay is required . . .");
            }
if(fname=="" || fname == null) {
        alert("Full name is required . . .");
            }

    alert( "Reservation Form \nFull Name;" + fname + 
    "\nGender            : " + gender +
    "\nBarangay          : " + brgy +
    "\nCity/Municipality : " + city +
    "\nCountry           : " + country +
    "\nReservation date  : " + res_date +
    "\nReservation time  : " + res_time);

}