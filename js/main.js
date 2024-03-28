const draggables = document.querySelectorAll('.draggable');
const placeholders = document.querySelectorAll('.box-1 .placeholder');
const defaultContainer = document.querySelector('.container.droppable');
const imageContainer = document.getElementById('image-container');

let originalContainer;

function handleDragStart() {
    this.classList.add('dragging');
    originalContainer = this.parentElement;
}

function handleDragEnd() {
    this.classList.remove('dragging');
}

function playAudio(audioSrc) {
    const audio = new Audio(audioSrc);
    audio.loop = true;
    audio.play();
}

draggables.forEach(draggable => {
    draggable.addEventListener('dragstart', handleDragStart);
    draggable.addEventListener('dragend', handleDragEnd);
});

placeholders.forEach(placeholder => {
    placeholder.addEventListener('dragover', e => {
        e.preventDefault();
    });

    placeholder.addEventListener('drop', e => {
        e.preventDefault();
        const draggable = document.querySelector('.dragging');
        if (draggable) {
            placeholder.appendChild(draggable);
            const audioSrc = draggable.dataset.audio;
            playAudio(audioSrc);
        }
    });
});

defaultContainer.addEventListener('dragover', e => {
    e.preventDefault();
});

function resetDraggedElements() {
    // Stop the audio playback
    const audio = document.getElementById('audio');
    audio.pause();
    audio.currentTime = 0;
    
    placeholders.forEach(placeholder => {
        const draggable = placeholder.querySelector('.draggable');
        if (draggable) {
            draggable.style.transition = 'transform 0.5s ease';
            draggable.style.transform = 'translate(0, 0)';
            originalContainer.appendChild(draggable);
        }
    });
}

function resetDraggedElements() {
    // Stop the audio playback
    const audio = document.getElementById('audio');
    audio.pause();
    audio.currentTime = 0;
    
    // Reload 
    window.location.reload();
}
