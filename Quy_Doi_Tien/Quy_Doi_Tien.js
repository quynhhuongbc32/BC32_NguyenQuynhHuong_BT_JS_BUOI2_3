document.getElementById("tinh").onclick = function(){
    //Đâu đầu
    var sotien = document.getElementById("sotien").value;
    var menhgia = 23500;
    //Xử lí
    var quydoitienVND = sotien * menhgia;
    var currentFormat = Intl.NumberFormat("vn-VN");
    var result = "<p>Quy đổi ra số tiền VND là : " + currentFormat.format(quydoitienVND) + " vnđ</p>";
    //Đầu ra
    document.getElementById("showInfoTotal").innerHTML = result;
}