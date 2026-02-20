const videos = [
    {
        id: 1,
        title: "Hot Amateur",
        duration: "12:45",
        views: "1.2M",
        githubLink: "https://github.com/user/videos/raw/video1.mp4"
    },
    {
        id: 2,
        title: "Blonde Solo",
        duration: "8:30",
        views: "856K",
        githubLink: "https://github.com/user/videos/raw/video2.mp4"
    }
];

// Easy function to add new videos via GitHub
function addVideoFromGitHub(title, duration, githubRawUrl) {
    const newVideo = {
        id: videos.length + 1,
        title: title,
        duration: duration,
        views: "0",
        githubLink: githubRawUrl
    };
    videos.push(newVideo);
    return newVideo;
}

// Example usage:
// addVideoFromGitHub("New Video", "10:15", "https://github.com/username/repo/raw/video.mp4");

function getVideos(filter = 'all') {
    if(filter === 'trending') return videos.sort((a,b)=>b.views-a.views);
    if(filter === 'newest') return videos.reverse();
    return videos;
}