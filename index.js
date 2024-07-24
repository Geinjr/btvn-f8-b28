var headeraccountEl = document.querySelector(".header-account");
var wrapperEl = document.querySelector(".wrapper");
var overlay = document.querySelector(".auth-overlay");

overlay.addEventListener("click", function () {
    overlay.style.display = "none";
    wrapperEl.style.display = "none";

    fields.forEach(function (field) {
        var inputEls = field.querySelectorAll(".emailandpass");

        inputEls.forEach(function (inputEl) {
            inputEl.value = "";
        });

        var warningEl = field.querySelector(".warning");
        if (warningEl) {
            warningEl.style.display = "none";
        }
    });

    accountEl.style.display = "none";
});

var eyeEls = document.querySelectorAll(".fa-eye");
eyeEls.forEach(function (eyeEl) {
    var passwordInput = eyeEl.closest(".all").querySelector("input");
    eyeEl.addEventListener("click", function () {
        if (
            eyeEl.classList.contains("fa-eye") &&
            passwordInput.type === "text"
        ) {
            eyeEl.classList.remove("fa-eye");
            eyeEl.classList.add("fa-eye-slash");
            passwordInput.type = "password";
        } else {
            eyeEl.classList.remove("fa-eye-slash");
            eyeEl.classList.add("fa-eye");
            passwordInput.type = "text";
        }
    });
});

var submitEl = document.querySelector(".submit");
var accountEl = document.querySelector(".account");

var fields = document.querySelectorAll(".field");
fields.forEach(function (field) {
    var inputEl = field.querySelector("input");
    var warningEl = field.querySelector(".warning");

    inputEl.addEventListener("input", function () {
        if (inputEl.value.trim() === "") {
            warningEl.style.display = "block";
        } else {
            warningEl.style.display = "none";
        }
    });
});

submitEl.addEventListener("click", function () {
    fields.forEach(function (field) {
        var inputEl = field.querySelector("input");
        var warningEl = field.querySelector(".warning");

        if (inputEl.value.trim() === "") {
            warningEl.style.display = "block";
            accountEl.style.display = "none";
        } else {
            warningEl.style.display = "none";
            accountEl.style.display = "block";
        }
    });
});

var loginBtn = document.querySelector("label.login");
var signupBtn = document.querySelector("label.signup");
var loginForm = document.querySelector("form.login");
var signupForm = document.querySelector("form.signup");
var wrappersocialEl = document.querySelector(".wrappersocial");

function showLoginForm() {
    loginForm.style.display = "block"; // Hiển thị form đăng nhập
    signupForm.style.display = "none"; // Ẩn form đăng ký
    wrappersocialEl.style.display = "block"; // Hiển thị social wrapper nếu cần

    loginBtn.classList.add("active");
    signupBtn.classList.remove("active");
}

// Hiển thị form đăng nhập khi nhấn vào .header-account
headeraccountEl.addEventListener("click", function () {
    wrapperEl.style.display = "block";
    overlay.style.display = "block";
    showLoginForm();
});

signupBtn.addEventListener("click", function () {
    signupForm.style.display = "block";
    loginForm.style.display = "none";
    wrappersocialEl.style.display = "none";

    fields.forEach(function (field) {
        var inputEls = field.querySelectorAll(".emailandpass");
        inputEls.forEach(function (inputEl) {
            inputEl.value = "";
        });
    });

    signupBtn.classList.add("active");
    loginBtn.classList.remove("active");
});

loginBtn.addEventListener("click", function () {
    fields.forEach(function (field) {
        var inputEls = field.querySelectorAll(".emailandpass");
        inputEls.forEach(function (inputEl) {
            inputEl.value = "";
        });
    });
    showLoginForm();
});

overlay.addEventListener("click", function () {
    wrapperEl.style.display = "none";
    overlay.style.display = "none";
    showLoginForm(); // Reset về form đăng nhập
});
