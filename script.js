
var main = document.querySelector("main");
var btn = document.querySelector("button");
var cursor = document.querySelector("#cursor");

document.body.addEventListener("mousemove", function (dets) {
    cursor.style.left = dets.clientX + "px";
    cursor.style.top = dets.clientY + "px";
});

var musicNotesContainer = document.querySelector(".musicNotes");


function spawnMusicNote() {
    const randomNote = 1 + Math.floor(Math.random() * 9);
    const musicPos =  Math.floor(Math.random() * 400);

    const note = document.createElement('div');
    note.className = 'musicNote';

    
    note.style.left = `${musicPos}px`;
    note.style.opacity = '0.9';
    note.style.transform = 'translateY(0px) scale(0.7)';
  
    note.style.mask = `url('assets/images/musicNotes${randomNote}.png') no-repeat center / contain`;
    note.style.webkitMask = `url('assets/images/musicNotes${randomNote}.png') no-repeat center / contain`;
  
    musicNotesContainer.appendChild(note);

   
        setTimeout(() =>
        {
        note.style.transform = 'translateY(-200px) scale(1.3)';
        note.style.opacity = '0';
        }, 50);

   
    setTimeout(() => {
        note.remove();
    }, 3000);

}

const validKeys = ["KeyA","KeyS","KeyD","KeyF","KeyI","KeyJ","KeyK","KeyL","KeyO","KeyR","KeyU","KeyW","KeyE","Space","Semicolon"];


document.addEventListener("keydown", function (dets) {

    if(!validKeys.includes(dets.code)){
        return;
    }
    spawnMusicNote();

    btn.innerHTML = dets.code;
    var aud = new Audio(`assets/mp3_piano_notes/${dets.code}.mp3`);


    aud.currentTime = 0;
    aud.play();


    const key = document.querySelector(`#${dets.code}`);
    key.classList.add('pressed');
    setTimeout(() => {
        key.classList.remove('pressed');
    }, 200)

});

var piano = document.querySelector("#piano");

piano.addEventListener("click", (val) => {

    if(val.target.closest('.whiteKey') == null && val.target.closest('.blackKey') == null){
        return;
    }
    spawnMusicNote();

    const key = val.target.id;
    // console.log(val);
    btn.innerHTML = key;

    var aud = new Audio(`assets/mp3_piano_notes/${key}.mp3`);


    aud.currentTime = 0;
    aud.play();



    const key1 = document.querySelector(`#${val.target.id}`);
    key1.classList.add('pressed');

    setTimeout(() => {
        key1.classList.remove('pressed');
    }, 300)

})





