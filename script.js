
const songs = [
    "creativeminds.mp3",
    "dreams.mp3",
    "india.mp3",
    "onceagain.mp3",
    "scifi.mp3",
    "summer.mp3"
];
const player = document.getElementById('player');

function createSongList(){
    const list = document.createElement("ol");
 
    for(let i = 0; i < songs.length; i++){
        const item = document.createElement("li");
        item.appendChild(document.createTextNode(songs[i]));
        list.appendChild(item);
    }
    return list;
}

const sngList = document.getElementById("sng_lst");
sngList.appendChild(createSongList());

sngList.onclick = function (e) {
    console.log(e);
    const source = document.getElementById('srce');
    source.src = "songs/" + e.target.innerText;

    document.querySelector('#crnt_sng').innerText = `Now Playing: ${e.target.innerText}`;

    player.load();
    player.play();
    
};

function playAudio(){
    if (player.readyState){
        player.play();
    }
}

function pauseAudio(){
    player.pause();
}

const slider = document.getElementById('volumeSlider');
slider.oninput = function (e){
    const volume = e.target.value;
    player.volume = volume;
};

function updateProgress(){
    if(player.currentTime > 0){
        const progressbar = document.getElementById("progress");
        progressbar.value = (player.currentTime/ player.duration) * 100;
    }
}