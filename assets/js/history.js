function fillEnrollmentTable() {
    var table = document.getElementById('history-table');
    while (table.rows.length > 1) {
        table.deleteRow(-1);
    }
    var row = table.insertRow(-1);
    row.insertCell(0).innerHTML = 'V001';
    row.insertCell(1).innerHTML = 'asdasd';
    row.insertCell(2).innerHTML = 'asdasd';
    row.insertCell(3).innerHTML = 'asdasd';
    row.insertCell(4).innerHTML = 'asdasd';
    row.insertCell(5).innerHTML = 'asdasd';
    row.insertCell(6).innerHTML = 'asdasd';
    row.insertCell(7).innerHTML = 'asdasd';
    var btn = document.createElement('input');
    btn.type = "button";
    btn.className = "btn btn-fill btn-danger";
    btn.value = "Sold";
    btn.onclick = function () {
        if (confirm('Do you want to continue?')) {

        }
    };
    btn.setAttribute('data-id', 'asd');
    row.insertCell(8).appendChild(btn);
}

fillEnrollmentTable()
