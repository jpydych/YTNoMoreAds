const adPlaybackRate = 100
const normalPlaybackRate = 1

function getPlayer() {
    return document.querySelector("video.video-stream.html5-main-video")
}

function setPlaybackRate(player, rate) {
    player.playbackRate = rate
}

let ad = false

function check() {
    if (document.querySelector(".video-ads > .ytp-ad-player-overlay") != null) {
        const player = getPlayer()

        setPlaybackRate(adPlaybackRate)
        player.play()

        const skipBtn = document.querySelector(".ytp-ad-skip-button-modern")
        if (skipBtn != null) {
            skipBtn.click()
        }

        player.muted = true
        ad = true
    } else if (ad) {
        const player = getPlayer()

        setPlaybackRate(player, normalPlaybackRate)

        player.muted = false
        ad = false
    }
}

setInterval(check, 20)
