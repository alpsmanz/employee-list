/**
 *
 */
function showEmployeeDetails(key) {
    var employeeData = getEmployeeData();
    var div = document.getElementById("details");
    div.innerHTML += '<p class="personal">No:' + employeeData[key][colum.ID] + '</p>';
    div.innerHTML += '<p class="personal">Name:' + employeeData[key][colum.NAME] + '</p>';

    $("#details").dialog({
        modal:true, //モーダル表示
        title:"社員情報", //タイトル
        buttons: { //ボタン
            "閉じる": function() {
                $(this).dialog("close");
            }
        }
    });
}
