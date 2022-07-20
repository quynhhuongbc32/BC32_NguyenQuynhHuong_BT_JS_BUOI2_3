document.getElementById("tinh").onclick = function(){
    //Đầu vào
    var tienluong = document.getElementById("tienluong").value;
    var songay = document.getElementById("songay").value;
    //Xử lí
    var tong = tienluong * songay;
    var currenFormat = new Intl.NumberFormat("vn-VN");
    var result = "<p>Tổng số tiền lương là: " + currenFormat.format(tong) + " vnđ</p>";
    // Đầu ra
    document.getElementById("showInfoTotal").innerHTML = result ;
}