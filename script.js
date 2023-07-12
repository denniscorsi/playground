

function sayHi(){
//alert("Hello!");
document.getElementById("emptyDiv").innerText = "Hello!!"
}



document.getElementById("ageForm"). addEventListener("submit", calculateYear);

function calculateYear(event){
    const formData = new FormData(event.target);
    const birthYear = formData.get("year")
    const age = 2023-birthYear;
    document.getElementById("age").innerText = age;
}

