console.log("welcome to spotify");

//Initialize the Variables
let songIndex =0;
let audioElement =new Audio('songs/1.mp3');
let masterPlay= document.querySelector('#masterPlay');
let myProgressBar =document.querySelector('#myProgress');


let songs=[
    {songName:"Standing In The Open", filePath:"songs/1.mp3" ,coverPath:"covers/1.jpg"},
    {songName:"Standing In The Open", filePath:"songs/2.mp3" ,coverPath:"covers/2.jpg"},
    {songName:"Standing In The Open", filePath:"songs/3.mp3" ,coverPath:"covers/3.jpg"},
    {songName:"Standing In The Open", filePath:"songs/4.mp3" ,coverPath:"covers/4.jpg"},
    {songName:"Standing In The Open", filePath:"songs/5.mp3" ,coverPath:"covers/5.jpg"},
    {songName:"Standing In The Open", filePath:"songs/6.mp3" ,coverPath:"covers/6.jpg"},
    {songName:"Standing In The Open", filePath:"songs/7.mp3" ,coverPath:"covers/7.jpg"},
    {songName:"Standing In The Open", filePath:"songs/8.mp3" ,coverPath:"covers/8.jpg"},
    {songName:"Standing In The Open", filePath:"songs/9.mp3" ,coverPath:"covers/9.jpg"},
    {songName:"Standing In The Open", filePath:"songs/10.mp3" ,coverPath:"covers/10.jpg"},
]

//Handle play/pause click
masterPlay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-circle-pause');
        masterPlay.classList.add('fa-circle-play');
       
    }
})

//Listen to Events
myProgressBar.addEventListener('timeupdate',()=>{
    console.log("timeupdate");

})