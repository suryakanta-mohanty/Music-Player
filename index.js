let progress = document.getElementById('progress');
let song = document.getElementById('song');
let ctrlIcon = document.getElementById('ctrlIcon');

song.onloadedmetadata = function(){
  progress.max = song.duration;
  progress.value = song.currentTime;
  
}

function playPaush(){
  if(ctrlIcon.classList.contains('fa-pause')){
    song.pause();
    ctrlIcon.classList.remove('fa-pause');
    ctrlIcon.classList.add('fa-play');

  }else{
    song.play();
    ctrlIcon.classList.add('fa-pause');
    ctrlIcon.classList.remove('fa-play');
  }

}

if(song.play()){
  setInterval(() => {
    progress.value = song.currentTime;
  }, 500);
}

progress.onchange = function (){
  song.play();
  song.currentTime = progress.value;
  ctrlIcon.classList.add('fa-pause');
  ctrlIcon.classList.remove('fa-play');
}

/*

let ctrlIcon = document.getElementById('ctrlIcon');
   let isPlaying = false; // Flag to track playing state

   song.onloadedmetadata = function(){
     progress.max = song.duration;
     progress.value = song.currentTime;
   }

   function playPause(){
     if(isPlaying){
       song.pause();
       ctrlIcon.classList.remove('fa-pause');
       ctrlIcon.classList.add('fa-play');
     } else {
       song.play().catch(error => {
         // Handle the potential error if play() fails
         console.error("Playback failed:", error);
       });
       ctrlIcon.classList.add('fa-pause');
       ctrlIcon.classList.remove('fa-play');
     }
     isPlaying = !isPlaying; // Toggle the playing state
   }

   // Start playback on user interaction (e.g., click on a button)
   ctrlIcon.addEventListener('click', playPause); 

   // ... rest of your code (progress bar update, etc.)
*/