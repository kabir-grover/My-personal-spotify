console.log("Welcome to my Spotify");
// initialise the variables
let songIndex = 0;
 let audioElement = new Audio('songs/1.mp3');
 let masterPlay = document.getElementById("masterPlay");
 let myProgressBar = document.getElementById("myProgressBar");
 let gif= document.getElementById('gif');
 let masterSongName = document.getElementById('masterSongName');
 let songItem = Array.from(document.getElementsByClassName('songItem'));
 
 
 let songs = [
    {songName:"Dear Zindagi", filePath: "songs/1.mp3", coverPath:" covers/1.jpg"},
    {songName:"You are my Life ", filePath: "songs/2.mp3", coverPath:" covers/2.jpg"},
    {songName:"I love you", filePath: "songs/3.mp3", coverPath:" covers/3.jpg"},
    {songName:"Mera Golgappa", filePath: "songs/4.mp3", coverPath:" covers/4.jpg"},
    {songName:"Gussa Kam kareya kar", filePath: "songs/5.mp3", coverPath:" covers/5.jpg"},
    {songName:"Mere sapno ki Rani", filePath: "songs/6.mp3", coverPath:" covers/6.jpg"},
    {songName:"Acha Chalta hu", filePath: "songs/7.mp3", coverPath:" covers/7.jpg"},
]
songItem.forEach((element,i) => {
    console.log(element,i);
   element.getElementsByTagName("img")[0].src= songs[i].coverPath;
   element.getElementsByClassName('songName')[0].innerText= songs[i].songName;
});

//  audioElement.play();
// handle play pause
masterPlay.addEventListener('click', function(){
    if(audioElement.paused || audioElement.currentTime == 0){
        audioElement.play();
        masterPlay.classList.remove('fa-play');
        masterPlay.classList.add('fa-pause');
        gif.style.opacity =1;

    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause');
        masterPlay.classList.add('fa-play');
        gif.style.opacity =0;
    }
})
// listen to events
audioElement.addEventListener("timeupdate", function(){
    
    progress = parseInt(audioElement.currentTime/audioElement.duration*100);
    myProgressBar.value= progress;
})
myProgressBar.addEventListener('change', function(){
    audioElement.currentTime= myProgressBar.value*audioElement.duration/100;
})
const makeAllPlays = function(){
    Array.from(document.getElementsByClassName('songItemPlay')).forEach(function(element){
        element.classList.remove('fa-pause');
        element.classList.add('fa-play');
})}

Array.from(document.getElementsByClassName('songItemPlay')).forEach(function(element){
    element.addEventListener('click', function(e){
        makeAllPlays();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-play');
        e.target.classList.add('fa-pause');
        audioElement.src= 'songs/'+(songIndex+1)+'.mp3';
        masterSongName.innerText=songs[songIndex].songName;
        audioElement.currentTime= 0;
        audioElement.play();
        gif.style.opacity =1;
        masterPlay.classList.remove('fa-play');
        masterPlay.classList.add('fa-pause');
    })
})
document.getElementById('previous').addEventListener('click', function(){
   
    if(songIndex>0){
        songIndex= songIndex-1;
    }
    else{
        songIndex = 0;
    }
    audioElement.src= 'songs/'+(songIndex+1)+'.mp3';
    masterSongName.innerText=songs[songIndex].songName;
        audioElement.currentTime= 0;
        audioElement.play();
        gif.style.opacity =1;
        masterPlay.classList.remove('fa-play');
        masterPlay.classList.add('fa-pause');

})
document.getElementById('next').addEventListener('click', function(){
   
    if(songIndex<6){
        songIndex= songIndex+1;
    }
    else{
        songIndex = 0;
    }
    audioElement.src= 'songs/'+(songIndex+1)+'.mp3';
    masterSongName.innerText=songs[songIndex].songName;
        audioElement.currentTime= 0;
        audioElement.play();
        gif.style.opacity =1;
        masterPlay.classList.remove('fa-play');
        masterPlay.classList.add('fa-pause');

})