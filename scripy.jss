document.getElementById("orderForm").addEventListener("submit", function(event) {
    event.preventDefault();
    
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let requirements = document.getElementById("requirements").value;

    alert("Thank you, " + name + "! Your request has been submitted.");
});
