// function clicked(){
//     alert("i got clicked!");
// }

// var lengthOfButtons = document.querySelectorAll(".drum").length;

// for(var i = 0;i<lengthOfButtons;i++){
//     document.querySelectorAll(".drum")[i].addEventListener("click",clicked);
// }










// var w = document.querySelector(".w");
// w.addEventListener("click",testing);

// document.querySelector(".a").addEventListener("click",testing);


// document.querySelector(".s").addEventListener("click",testing);


// document.querySelector(".d").addEventListener("click",testing);


// document.querySelector(".j").addEventListener("click",testing);



function respond(){
    alert("i got clicked");
}







var lengthOfButtons = document.querySelectorAll(".drum").length;



// for(var i = 0;i<lengthOfButtons;i++){
//     document.querySelectorAll(".drum")[i].addEventListener("click",function(){
//         var audio = new Audio('sounds/tom-1.mp3')
//         audio.play();

//     });
// }





for(var i = 0;i<lengthOfButtons;i++){
    document.querySelectorAll(".drum")[i].addEventListener("click",function(){
       var buttonInnerHtml = this.innerHTML;
       makeSound(buttonInnerHtml);

       
       
       
    })
}


document.addEventListener("keypress",function(event){
    makeSound(event.key);
})













function makeSound(key){
    switch(key){
        case "w":
            var tom1 = new Audio('sounds/tom-1.mp3');
            tom1.play();
            break;
        case "a":
            var tom2 = new Audio('sounds/tom-2.mp3');
            tom2.play();
            break;
        case "s":
            var tom3 = new Audio('sounds/tom-3.mp3');
            tom3.play();
            break;
        case "d":
            var tom4 = new Audio('sounds/tom-4.mp3');
            tom4.play();
            break;
        case "j":
            var snare = new Audio('sounds/snare.mp3');
            snare.play();
            break;
        case "k":
            var crash = new Audio('sounds/crash.mp3');
            crash.play();
            break;
        case "l":
            var kickBase = new Audio('sounds/kick-bass.mp3');
            kickBase.play();
            break;

        default:console.log(buttonInnerHtml);
       }
}

















// //constructor function

// function AddKeepers(name,age,place,work){
//     this.name = name;
//     this.age = age;
//     this.place = place;
//     this.work = work;
// }

// // object creation
// var keeper1 = new AddKeepers("jenny",30,"switzerland",["cleaning","washing"]);
