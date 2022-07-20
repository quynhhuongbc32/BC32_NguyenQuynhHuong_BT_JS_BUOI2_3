
document.getElementById("tinh").onclick = function(){
    // Đầu vào
    var sothu1 = document.getElementById("sothu1").value * 1;
    var sothu2 = document.getElementById("sothu2").value * 1;
    var sothu3 = document.getElementById("sothu3").value * 1;
    var sothu4 = document.getElementById("sothu4").value * 1;
    var sothu5 = document.getElementById("sothu5").value * 1;

    // Xử lý
    var tinh = (sothu1 + sothu2 + sothu3 + sothu4 + sothu5) / 5;

    // Đầu ra
    document.getElementById("showInfoTotal").innerHTML = "<p>Giá trị trung bình của 5 số là : " + tinh + "</p>";
}