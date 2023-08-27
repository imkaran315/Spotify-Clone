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
let audioElement = new Audio(songs[songIndex].filePath);
let playButton = document.getElementById('playButton');
let progressBar = document.getElementById('progressBar');


// Handle play/pause

playPause(){
    
    playButton.addEventListener('click', () => {
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
    
    })
}

// Handle Prev/Next

nextButton.addEventListener('click', ()=>{

    audioElement.pause()

    if(songIndex + 1 <= 9){
        songIndex++;
    }
    else{
        songIndex = 0
    }

    audioElement = new Audio(songs[songIndex].filePath);
    audioElement.play()
    updateSeekBar();
 })

prevButton.addEventListener('click', ()=>{

    audioElement.pause()

    if(songIndex - 1 >= 0){
        songIndex--;
    }
    else{
        songIndex = 9
    }

    audioElement = new Audio(songs[songIndex].filePath);
    audioElement.play()
    updateSeekBar();
 })


    
// progressBar

function updateSeekBar(){
    // Update seek bar
    audioElement.addEventListener('timeupdate', () => {
        let progress = parseFloat((audioElement.currentTime / audioElement.duration) * 100);
        progressBar.value = progress;
    })
}

progressBar.addEventListener('change', () => {
    // update audio on changing seek bar

    audioElement.currentTime = progressBar.value / 100 * audioElement.duration;

})