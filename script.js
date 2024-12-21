console.log("welcome to spotify");

//Initialize the Variables
let songIndex =0;
let audioElement =new Audio('songs/1.mp3');
let masterPlay= document.querySelector('#masterPlay');
let myProgressBar =document.querySelector('#myProgress');
let gif=document.querySelector('#gif');
let songItems =Array.from(document.querySelectorAll('.songItem'));


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

songItems.forEach((element,i)=>{
    element.getElementsByTagName("img")[0].src =songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText =songs[i].songName;

})
//Handle play/pause click
masterPlay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
        gif.style.opacity=1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-circle-pause');
        masterPlay.classList.add('fa-circle-play');
        gif.style.opacity=0;
    }
})

//Listen to Events
audioElement.addEventListener('timeupdate',()=>{
   

    progress =parseInt((audioElement.currentTime/audioElement.duration)*100);
   
    myProgressBar.value=progress;
})

myProgressBar.addEventListener('change',()=>{
    audioElement.currentTime=myProgressBar.value*audioElement.duration/100;
})

const makeAllPlays =()=>{
    Array.from(document.getElementsByClassName("songItemPlay")).forEach((element)=>{
        element.target.classList.remove('fa-circle-pause');
        element.target.classList.add('fa-circle-play');

    })
}


Array.from(document.getElementsByClassName("songItemPlay")).forEach((element)=>{
    element.addEventListener("click",(e)=>{
        makeAllPlays();
        e.target.classList.remove('fa-circle-play');
        e.target.classList.add('fa-circle-pause');
        audioElement.src='songs/3.mp3';
        audioElement.currentTime=0;
        audioElement.play();
    })
})