var myModal = document.getElementById('myModal')
var myInput = document.getElementById('myInput')

myModal.addEventListener('shown.bs.modal', function () {
  myInput.focus()
})

$('#pcwhite').on("click", function(){
    if ($("#fp1").attr("src","images/fp_b1.jpg")) 
    {
        $("#fp1").attr("src","images/fp_b1.jpg")
    }
    else 
    {
        $("#fp1").attr("src","images/fp_b1.jpg");
        $("#fp1").attr("href","images/fp_b1.jpg");
    }
}
)
$('#pcwhite').on("click", function(){
    if ($("#fp1").attr("src","images/fp_w1.jpg")) 
    {
        $("#fp1").attr("src","images/fp_w1.jpg");
    }
    else 
    {
        $("#fp1").attr("src","images/fp_w1.jpg");
        $("#fp1").attr("href","images/fp_w1.jpg");
    }
}
)

