document.getElementById("tinh").onclick = function(){
    //Đầu vào
    var chieudai = document.getElementById("chieudai").value * 1;
    var chieurong = document.getElementById("chieurong").value * 1;
    //Xử lí
    var dientich = chieudai * chieurong;
    var chuvi = (chieudai + chieurong) * 2; 
    var result = "<div>";
    result += "<p> Diện tích HCN là: " + dientich + " </p>";
    result += "<p> Chu vi HCN là: " + chuvi + " </p>";
    result += "</div>";
    //Đầu ra
    document.getElementById("showInfoTotal").innerHTML = result;
}