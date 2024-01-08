
let toggle=document.getElementById("toggle");
let sidebar=document.getElementsByClassName("sidebar")[0];
let closing=document.getElementById("closing");
let btn=document.getElementById("btn")

toggle.addEventListener("click", function(){   
    sidebar.style.display="flex"
})

closing.addEventListener("click" ,function(){
    sidebar.style.display="none"
})
// function inputstrt(){
//     var input = parseInt(document.getElementById('input').value);
//     let card1=document.getElementsByClassName("card1")[0]
//     let card2=document.getElementsByClassName("card2")[0]
//     card1.style.display = "block";
//     card2.style.display = "block";
//     if (input>=18){
//       card2.style.display="none"
//     } else if (input<=17){
//         card1.style.display="none"
//     } else{
//         alert("please input a valid number")
//     }
// }
input.addEventListener('keyup', function(){
    var input = parseInt(document.getElementById('input').value);
    let card1=document.getElementsByClassName("card1")[0]
    let card2=document.getElementsByClassName("card2")[0]
    card1.style.display = "block";
    card2.style.display = "block";
    if (input>=18){
      card2.style.display="none"
    } else if (input<=17){
        card1.style.display="none"
    } else{
        
    }
})



