function validateApplicationForm() {
    var status = document.getElementById("Status").value.trim();
    var scholarshipType = document.getElementById("ScholarshipType").value.trim();
    var fullname = document.getElementById("Fullname").value.trim();
    var home = document.getElementById("Home").value.trim();
    var barangay = document.getElementById("Barangay").value.trim();
    var emailaddress = document.getElementById("EmailAdd").value.trim();
    var mobileNumber = document.getElementById("Mobile").value.trim();
    var age = document.getElementById("Age").value.trim();
    var birth = document.getElementById("Birth").value.trim();
    var barangay = document.getElementById("Barangay").value.trim();
    var PlaceOfBirth = document.getElementById("Place").value.trim();
    var YearsOfResidency = document.getElementById("YOR").value.trim();
    var MaritalStatus = document.getElementById("Marital").value.trim();
    var citizenship = document.getElementById("Cityzenship").value.trim();
    var religion = document.getElementById("Religion").value.trim();

}

function handleSubmit(event) {
    event.preventDefault(); 
        alert("Application submitted!");
    window.location.href = "index.html";
}

var sbmt = document.getElementById("sbmt");
sbmt.addEventListener("click", displayDetails);

var row = 1;

function displayDetails(){

    var Status = document.getElementById("Status").value;
    var ScholarshipType = document.getElementById("ScholarshipType").value;
    var Fullname = document.getElementById("Fullname").value;
    var Home = document.getElementById("Home").value;
    var Barangay = document.getElementById("Barangay").value;
    var EmailAdd = document.getElementById("EmailAdd").value;

    var formData = {Status: Status, ScholarshipType: ScholarshipType, Fullname: Fullname, 
    Home: Home, Barangay: Barangay,EmailAdd: EmailAdd};

var savedData = JSON.parse(localStorage.getItem('formData')) || [];

savedData.push(formData);

localStorage.setItem('formData', JSON.stringify(savedData));

document.querySelector("form").addEventListener("submit",handleSubmit);
}

function logout() {
    window.location.href = "Login.html";
}
/*      --------------------------------------------------------------------------------------     */
const form = document.querySelector("form"),
        nextBtn = form.querySelector(".nextBtn"),
        backBtn = form.querySelector(".backBtn"),
        allInput = form.querySelectorAll(".first input");


nextBtn.addEventListener("click", ()=> {
    allInput.forEach(input => {
        if(input.value != ""){
            form.classList.add('secActive');
       }else{
            form.classList.remove('secActive'); 
        }
    })
})

backBtn.addEventListener("click", () => form.classList.remove('secActive'));