console.log("welcome to spotify!")

// Songs array

let songs = [{
        songName: "Tum Ho",
        artistName: 'Mohit Chauhan, Suzzane DeMello',
        filePath: 'songs/Tum_Ho.mp3',
        coverPath: "covers/Song-1.jpg"
        ,id: 0
    },

    {
        songName: "Tere Bina",
        artistName: 'Mustafa Zahid',
        filePath: "songs/Tere Bina.mp3",
        coverPath: "covers/Song-2.jpg"
        ,id: 1
    },

    {
        songName: "Tujhe Bula diya",
        artistName: 'Mohit Chauhan, Shekhar Ravjiani, Shruti Pathak',
        filePath: "songs/Tujhe Bhula Diya.mp3",
        coverPath: "covers/Song-3.jpg"
        ,id: 2
    },

    {
        songName: "Attention",
        artistName: 'Charlie Puth',
        filePath: "songs/Attention.mp3",
        coverPath: "covers/Song-4.jpg"
        ,id: 3
    },

    {
        songName: "Tum Se Hi",
        artistName: 'Mohit Chauhan',
        filePath: "songs/Tum Se Hi.mp3",
        coverPath: "covers/Song-5.jpg"
        ,id: 4
    },

    {
        songName: "All Night (Live)",
        artistName: 'AP Dhillon, Shinda Kaholon',
        filePath: "songs/All Night (Live).mp3",
        coverPath: "covers/Song-6.jpg"
        ,id: 5
    },

    {
        songName: "Blank Space",
        artistName: 'Taylor Swift',
        filePath: "songs/Blank Space.mp3",
        coverPath: "covers/Song-7.jpg"
        ,id: 6
    },

    {
        songName: "Khamoshiyan",
        artistName: 'Jeet Ganguli, Arijit Singh',
        filePath: "songs/Khamoshiyan.mp3",
        coverPath: "covers/Song-8.jpg"
        ,id: 7
    },

    {
        songName: "Ishq Bulava",
        artistName: 'Vishal-Shekhar, Sanam Puri, Shipra Goyal',
        filePath: "songs/Ishq Bulaava.mp3",
        coverPath: "covers/Song-9.jpg"
        ,id: 8
    },

    {
        songName: "Perfect",
        artistName: 'Ed Sheeran',
        filePath: "songs/Perfect.mp3",
        coverPath: "covers/Song-10.jpg"
        ,id: 9
    }

]



//Initializing the variables

let songIndex = 0;
let TotalSongs = 10;
let audioElement = new Audio(songs[songIndex].filePath);
let playButton = document.getElementById('playButton');
let progressBar = document.getElementById('progressBar');
let volumeBar = document.getElementById('volumebar');
let myInterval;

//Event Listeners

playButton.addEventListener('click', () => playPause());
nextButton.addEventListener('click', () => nextSong());
prevButton.addEventListener('click', () => prevSong());
audioElement.addEventListener('timeupdate', () => updateSeekBar());
progressBar.addEventListener('change', () => updateCurrentTime());
volumeBar.addEventListener('change', () => updateVolume());


// Handles playing selected song

function playSelectedSong(index){
    songIndex = index;
    clearInterval(myInterval);
    
    audioElement.pause();
    audioElement = new Audio(songs[songIndex].filePath);
    playPause(); 
    
    updateCover();
    updateSongTitle();
    updateTime();
    updateSeekBar();
}

// Handle play/pause
function playPause() {
    // when audio is not playing

    let playButtonImg = document.getElementById('playButton-img');

    if (audioElement.paused || audioElement.currentTime == 0) {
        audioElement.play();
        playButtonImg.src = "icons/pause.png";
    } else {
        audioElement.pause();
        playButtonImg.src = "icons/play.png";
    }
    
}


// Handle Prev/Next

function nextSong() {

    clearInterval(myInterval);
    audioElement.pause()
    songIndex = songIndex + 1 <= TotalSongs - 1 ? songIndex + 1 : 0;

    audioElement = new Audio(songs[songIndex].filePath);
    
    playPause();
    
    updateCover();
    updateSongTitle();
    updateSeekBar();
    
    
}

function prevSong() {
    clearInterval(myInterval);

    audioElement.pause()

    songIndex = songIndex - 1 >= 0 ? songIndex - 1 : TotalSongs - 1;

    audioElement = new Audio(songs[songIndex].filePath);

    playPause();
    
    updateCover();
    updateSongTitle();
    updateSeekBar();
    
}



// progressBar
function updateSeekBar() {
     myInterval = setInterval(() => {
        progressBar.value = parseInt((audioElement.currentTime / audioElement.duration) * 1000);
        updateTime();
     }, 1000);
}

function updateCurrentTime() {
    // update audio on changing seek bar
    audioElement.currentTime = progressBar.value / 1000 * audioElement.duration;
    updateTime()
}

//volume bar
function updateVolume() {
    audioElement.volume = volumeBar.value / 100;
}

// Handles player cover and name

function updateCover() {
    let poster = document.getElementById('poster');
    poster.src = songs[songIndex].coverPath;
}

function updateSongTitle() {
    let songTitle = document.getElementById('title');
    songTitle.innerHTML = songs[songIndex].songName;

    // update artist name

    let artist = document.getElementById('artist');
    artist.innerHTML = songs[songIndex].artistName;
}

// Handles player timing

function updateTime() {
    let songPassed = document.getElementById('songPassed');
    let songDuration = document.getElementById('songDuration');

    // Formatting seconds into clock time
    songDuration.innerText = (String(parseInt(audioElement.duration / 60)) ?? "00")+ ":" + (String(parseInt(audioElement.duration % 60))  ?? "00");
    


    songPassed.innerText = parseInt(audioElement.currentTime / 60)  + ":" + parseInt(audioElement.currentTime % 60);

}


