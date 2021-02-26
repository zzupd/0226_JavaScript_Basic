function dataOut() {
    var data = document.getElementById("insData").value;
    // 변수(variable, 배리어블) =>  특정 값(= data, 데이터)을
    //                              임시보관하는 문자 또는 문자열
    // 변수명을 만드는 규칙은 함수명을 만드는 규칙과 동일함.
//    alert(data);
    document.getElementById("output").innerText = data;
    document.getElementById("output").style.color = "#f00";
    document.getElementById("output").style.fontSize = "50px";
    document.getElementById("output").style.fontStyle = "italic";


}

