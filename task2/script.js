let form = document.getElementById("myForm");
let result = document.getElementById("result");
let themeButton = document.getElementById("themeButton");

form.addEventListener("submit", function(event) {
    event.preventDefault();

    let surname = document.getElementById("surname").value;
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let phone = document.getElementById("phone").value;

    result.innerHTML = `
        <div class="info">
            <h2>Введенные данные</h2>
            <p><b>Фамилия:</b> ${surname}</p>
            <p><b>Имя:</b> ${name}</p>
            <p><b>Электронная почта:</b> ${email}</p>
            <p><b>Телефон:</b> ${phone}</p>
        </div>
    `;
});

themeButton.addEventListener("click", function() {
    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {
        themeButton.textContent = "Дневной режим";
    } else {
        themeButton.textContent = "Ночной режим";
    }
});
