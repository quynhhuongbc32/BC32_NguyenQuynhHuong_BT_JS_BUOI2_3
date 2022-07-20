
function tong() {
    //Đầu 
    var nhapsoN = document.getElementById("nhapSoN").value * 1;
    //Xử lý
    var tong = 0;
    var hangChuc = Math.floor(nhapsoN / 10);
    var donvi = Math.floor(nhapsoN % 10);
        tong = hangChuc + donvi;
        result = "<p>Tổng của 2 kí số là : "+ tong +"</p>";
    //Đầu ra
    document.getElementById("showInfoTotal").innerHTML = result;
}


