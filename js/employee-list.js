document.write("<script type='text/javascript' src='../js/employee-data.js'></script>");

/**
 *
 */
function createList() {
    var employeeData = getEmployeeData();
    for (var key in employeeData) {
        var div = document.createElement('div');

        div.className = "item";
        if (employeeData[key][colum.POSITION] === position.MGR) {
            div.className += " x3";
        } else if (employeeData[key][colum.POSITION] === position.CHF ||
                   employeeData[key][colum.POSITION] === position.GL  ||
                   employeeData[key][colum.POSITION] === position.TM) {
            div.className += " x2";
        }
        if (employeeData[key][colum.PHOTO] == undefined) {
            div.innerHTML  = '<img src="../img/person_default.png"/>';
        } else {
            div.innerHTML  = '<img src=' + employeeData[key][colum.PHOTO] + '/>';
        }
        div.innerHTML += '<p class="personal">No:' + employeeData[key][colum.ID] + '</p>';
        div.innerHTML += '<p class="personal">Name:' + employeeData[key][colum.NAME] + '</p>';
        var target = document.getElementById('container');
        target.appendChild(div);
    }
}
