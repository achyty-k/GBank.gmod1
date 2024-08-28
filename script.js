document.getElementById("service-form").addEventListener("submit", function(event) {
    event.preventDefault();

    const serviceName = document.getElementById("service-name").value;
    const printer = document.getElementById("printer").value;
    const balance = document.getElementById("balance").value;

    const table = document.getElementById("admin-service-table");
    const row = table.insertRow();
    row.insertCell(0).innerText = serviceName;
    row.insertCell(1).innerText = printer;
    row.insertCell(2).innerText = balance;

    // Очистка формы после добавления
    document.getElementById("service-form").reset();
});
