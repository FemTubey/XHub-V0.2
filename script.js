function renderVideos(filter = 'all') {
    const container = document.getElementById('video-container');
    container.innerHTML = '';
    getVideos(filter).forEach(video => {
        container.innerHTML += `
            <div class="video-card" onclick="playVideo('${video.githubLink}')">
                <div class="thumb">${video.duration}</div>
                <div>${video.title}</div>
                <small>${video.views} views</small>
            </div>
        `;
    });
}

function playVideo(githubUrl) {
    const modal = document.createElement('div');
    modal.innerHTML = `
        <div class="video-modal">
            <video controls style="width: 100%; max-width: 800px;">
                <source src="${githubUrl}" type="video/mp4">
            </video>
            <button onclick="this.parentElement.remove()" style="margin-top: 10px;">Close</button>
        </div>
    `;
    document.body.appendChild(modal);
}

function filterVideos(filter) {
    renderVideos(filter);
}

renderVideos();