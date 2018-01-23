/**
 *
 */
function showEmployeeDetails(key) {
    var employeeData = getEmployeeData();
    var target = document.getElementById('details');

    var divDetail = document.createElement('div');
    divDetail.id = "detail_info";
    divDetail.className = "details";
    target.appendChild(divDetail);

    var divImg = document.createElement('div');
    divImg.id = "detail_info_img";
    divImg.className = "details img";

    if (employeeData[key][colum.PHOTO] == undefined) {
        divImg.innerHTML  = '<img src="../img/person_default.png"/>';
    } else {
        divImg.innerHTML  = '<img src=' + employeeData[key][colum.PHOTO] + '/>';
    }

    divDetail.appendChild(divImg);

    var divPersonal = document.createElement('div');
    divPersonal.id = "detail_info_personal";
    divPersonal.className = "details personal";

    divPersonal.innerHTML += '<p class="personal">id: ' + employeeData[key][colum.ID] + '</p>';
    divPersonal.innerHTML += '<p class="personal">Name: ' + employeeData[key][colum.NAME] + '</p>';
    divPersonal.innerHTML += '<p class="personal">Phonetic: ' + employeeData[key][colum.PHONETIC] + '</p>';
    divPersonal.innerHTML += '<p class="personal">Working: ' + employeeData[key][colum.WORK] + '</p>';
    divPersonal.innerHTML += '<p class="personal">Position: ' + position_label[employeeData[key][colum.POSITION]] + '</p>';
    divPersonal.innerHTML += '<p class="personal">Email: ' + employeeData[key][colum.MAIL] + '</p>';
    divPersonal.innerHTML += '<p class="personal">Phone: ' + employeeData[key][colum.PHN] + '</p>';
    divPersonal.innerHTML += '<p class="personal">Birth: ' + birth_place[employeeData[key][colum.BIRTH]] + '</p>';
    divPersonal.innerHTML += '<p class="personal">Field: ' + field_label[employeeData[key][colum.FIELD]] + '</p>';
    divDetail.appendChild(divPersonal);

    $("#details").dialog({
        modal:true, //モーダル表示
        title:"社員情報", //タイトル
        closeOnEscape:false, // ESCキーによるダイアログ消去抑制
        width:500,
        show: {
            effect: "blind",
            delay: 10,
            duration: 500
        },
        buttons: { //ボタン
            "閉じる": function() {
                var div = document.getElementById("detail_info");
                this.removeChild(div);
                $(this).dialog("close");
            }
        },
        open: function(event, ui) { $(".ui-dialog-titlebar-close").hide(); }
    });
}
