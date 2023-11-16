console.log("Welcome to my spotify");
//Initialize the variable//
 let songIndex=0;
let audioElement= new Audio("SONGS/5.mp3");
let masterPlay=document.getElementById('masterPlay');
 let myprogressBar=document.getElementById('myprogressBar');
 let gif=document.getElementById('gif');
//  let NewsongItem=Array.from(document.getElementsByClassName('songItem'));
let NewsongItem=document.querySelectorAll(".songItemPlay");
let mastersongName=document.getElementById("mastersongName");

let songs= [
    {songName:"Yesterday",filepath:"SONGS/1.mp3",coverpath:"COVER/beatles-abbeyroad-square-reuters-applecorps.jpg"},
    {songName:"All my loving",filepath:"SONGS/2.mp3",coverpath:"COVER/beatles-abbeyroad-square-reuters-applecorps.jpg"},
    {songName:"Let it be",filepath:"SONGS/3.mp3",coverpath:"COVER/beatles-abbeyroad-square-reuters-applecorps.jpg"},
    {songName:"Dont Let Me Down",filepath:"SONGS/4.mp3",coverpath:"COVER/beatles-abbeyroad-square-reuters-applecorps.jpg"},
    {songName:"Imagine",filepath:"SONGS/5.mp3",coverpath:"COVER/beatles-abbeyroad-square-reuters-applecorps.jpg"},
    {songName:"Blackbird",filepath:"SONGS/6.mp3",coverpath:"COVER/beatles-abbeyroad-square-reuters-applecorps.jpg"},
    {songName:"Come together",filepath:"SONGS/7.mp3",coverpath:"COVER/beatles-abbeyroad-square-reuters-applecorps.jpg"},
 ]
//handle to play/pause the click//
  masterPlay.addEventListener("click",function(){
   
      audioElement.play();
      if(audioElement.paused||audioElement.currentTime<=0){
                 audioElement.play();
                  masterPlay.classList.remove("fa-circle-play");
                  masterPlay.classList.add("fa-circle-pause");
                  gif.style.opacity=1;
                  // // listen to events//
 audioElement.addEventListener('timeupdate',()=>{
     console.log('timeupdate');
     //update seekbar//
     progress=parseInt((audioElement.currentTime/audioElement.duration)*100);
     console.log(progress);
     myprogressBar.value=progress;

 })
 // percentage into duration//
 myprogressBar.addEventListener('change',()=>{
    audioElement.currentTime=myprogressBar.value*audioElement.duration/100;

 })

    

  } else{
   audioElement.pause();
   masterPlay.classList.add("fa-circle-play");
   masterPlay.classList.remove("fa-circle-pause");
   gif.style.opacity=0;

  }
})

//    songItem.forEach((element,i)=>{
//     console.log(element, i);
//    element.getElementsByTagName("img")[0].src=songs[i].coverpath;
//    element.getElementsByClassName("songName")[0].innerText=songs[i].songName;
// })
 NewsongItem.forEach(function(element){
   element.addEventListener("click",function(e){
      console.log(element);
      //element.getElementsByTagName("img")[0].src=songs[i].coverpath;
      //element.getElementsByClassName("songName")[0].innerText=songs[i].songName;
        if(element.classList[2]=='fa-circle-play'){

       element.classList.remove('fa-circle-play');
       element.classList.add('fa-circle-pause');

      let songIndex=parseInt(e.target.id);
      mastersongName.innerText=songs[songIndex].songName;
      console.log(songIndex);
      audioElement.src=`SONGS/${songIndex+1}.mp3`;
     
      audioElement.play();
      audioElement.currentTime=0;
      myprogressBar.value=0;
     // console.log("audioElement");
     
      masterPlay.classList.remove("fa-circle-play");
      masterPlay.classList.add("fa-circle-pause");
      gif.style.opacity=1;
    }else{
       audioElement.pause();
       element.classList.add('fa-circle-play');
       element.classList.remove('fa-circle-pause');
       myprogressBar.value=0;
        masterPlay.classList.add("fa-circle-play");
        masterPlay.classList.remove("fa-circle-pause");
        gif.style.opacity=0;

   }
   })
})
document.getElementById('next').addEventListener("click",()=>{
   if(songIndex>=6)
   {
      songIndex=0;
   }
   else{
      songIndex+=1;
   }
   audioElement.src=`SONGS/${songIndex+1}.mp3`;
   mastersongName.innerText=songs[songIndex].songName;
   audioElement.currentTime=0;
   audioElement.play();
   myprogressBar.value=0;
   masterPlay.classList.remove("fa-circle-play");
   masterPlay.classList.add("fa-circle-pause");
})
document.getElementById('previous').addEventListener("click",()=>{
   if(songIndex<=0)
   {
      songIndex=0;
   }
   else{
      songIndex-=1;
   }
   audioElement.src=`SONGS/${songIndex+1}.mp3`;
   mastersongName.innerText=songs[songIndex].songName;
   audioElement.currentTime=0;
   audioElement.play();
   myprogressBar.value=0;
   masterPlay.classList.remove("fa-circle-play");
   masterPlay.classList.add("fa-circle-pause");
})



