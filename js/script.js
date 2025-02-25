function checkLogin() {
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    if (email === "blackhacker79866@gmail.com" && password === "blackhacker756") {
        document.body.innerHTML = '<div class="dialog-box"><h2>Welcome To My Official Website...</h2>' +
                                  '<button onclick="contactWhatsApp()">WhatsApp Contact</button>' +
                                  '<button onclick="contactEmail()">Email Contact</button>' +
                                  '<button onclick="startWebsite()">Start Website</button></div>';
        document.querySelector(".dialog-box").style.display = "block";
    } else {
        document.getElementById("error-message").textContent = "Invalid Email or Password!";
    }
}

function contactWhatsApp() {
    window.location.href = "https://wa.me/yourwhatsappnumber";
}

function contactEmail() {
    window.location.href = "mailto:your-email@example.com";
}

function startWebsite() {
    alert("Website Starting...");
    // Redirect to the main website or home page
  }
