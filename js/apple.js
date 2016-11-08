$(document).ready(function(){

    var caid=$(".daohang .caid")[0];
    console.log(caid)
    var lisbox=$(".daohang .lis-box2");
    console.log(lisbox)

    caid.onclick=function(){
        // alert(1)
        // lisbox.css("display","block")
        lisbox.toggleClass("xian")
    }



    function dianji(h,news){
        h.onclick=function(){
            news.style.display="block"
        }
    }
    var h1=$("#news2 h3")[0];
    var news1=$("#news2 .new")[0];
    dianji(h1,news1)

        var h2=$("#news2 h3")[1];
    var news2=$("#news2 .new")[1];
    dianji(h2,news2)

        var h3=$("#news2 h3")[2];
    var news3=$("#news2 .new")[2];
    dianji(h3,news3)

        var h4=$("#news2 h3")[3];
    var news4=$("#news2 .new")[3];
    dianji(h4,news4)

        var h5=$("#news2 h3")[4];
    var news5=$("#news2 .new")[4];
    dianji(h5,news5)

        var h6=$("#news2 h3")[5];
    var news6=$("#news2 .new")[5];
    dianji(h6,news6)
})