console.log("welcome to spotify!")

// Songs array

let songs = [
    {
        songName: "Tum Ho",                    
        filePath: 'songs/Tum_Ho.mp3',
        coverPath: "covers/Song-1.jpg"
    },

    {
        songName: "Tere Bina",
        filePath: "songs/Tere Bina.mp3",
        coverPath: "covers/Song-2.jpg"
    },

    {
        songName: "Tujhe Bula diya",
        filePath: "songs/Tujhe Bhula Diya.mp3",
        coverPath: "covers/Song-3.jpg"
    },

    {
        songName: "Attention",
        filePath: "songs/Attention.mp3",
        coverPath: "covers/Song-4.jpg"
    },

    {
        songName: "Tum Se Hi",
        filePath: "songs/Tum Se Hi.mp3",
        coverPath: "covers/Song-5.jpg"
    },

    {
        songName: "All Night (Live)",
        filePath: "songs/All Night (Live).mp3",
        coverPath: "covers/Song-6.jpg"
    },

    {
        songName: "Blank Space",
        filePath: "songs/Blank Space.mp3",
        coverPath: "covers/Song-7.jpg"
    },

    {
        songName: "Khaoshiyan",
        filePath: "songs/Khamoshiyan.mp3",
        coverPath: "covers/Song-8.jpg"
    },

    {
        songName: "Ishq Bulava",
        filePath: "songs/Ishq Bulaava.mp3",
        coverPath: "covers/Song-9.jpg"
    },

    {
        songName: "Perfect",
        filePath: "songs/Perfect.mp3",
        coverPath: "covers/Song-10.jpg"
    }

]



//Initializing the variables

let songIndex = 0;
let TotalSongs = 10;
let audioElement = new Audio(songs[songIndex].filePath);
let playButton = document.getElementById('playButton');
let progressBar = document.getElementById('progressBar');
let volumeBar = document.getElementById('volumebar');

//Event Listeners

playButton.addEventListener('click', () => playPause());
nextButton.addEventListener('click', () => nextSong());
prevButton.addEventListener('click', () => prevSong());
audioElement.addEventListener('timeupdate', () => updateSeekBar());
progressBar.addEventListener('change', () => updateCurrentTime());
volumeBar.addEventListener('change', () => updateVolume());

// Handle play/pause

function playPause(){
    // when audio is not playing

    let playButtonImg = document.getElementById('playButton-img');

    if (audioElement.paused || audioElement.currentTime == 0) {
        audioElement.play();
        playButtonImg.src = "icons/pause.png";
    }
    else {
        audioElement.pause();
        playButtonImg.src = "icons/play.png";
    }

}


// Handle Prev/Next



function nextSong(){

    audioElement.pause()
    songIndex = songIndex + 1 <= TotalSongs - 1 ? songIndex + 1 : 0;

    audioElement = new Audio(songs[songIndex].filePath);
    playPause();
    updateSeekBar();
 }

function prevSong(){

    audioElement.pause()

    if(songIndex - 1 >= 0){
        songIndex--;
    }
    else{
        songIndex = 9
    }

    audioElement = new Audio(songs[songIndex].filePath);
    playPause();
    updateSeekBar()
 }


    
// progressBar

function updateSeekBar(){
    progressBar.value =  parseInt((audioElement.currentTime / audioElement.duration) * 1000);
    
}

function updateCurrentTime(){
    // update audio on changing seek bar
    audioElement.currentTime = progressBar.value / 100 * audioElement.duration;
}

//volume bar



function updateVolume(){
    audioElement.volume = volumeBar.value /100;
}


