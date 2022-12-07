const downloadBtn = document.querySelector(".download-btn");
const fileLink = "udah expired om";

const initTimer = () => {
    if(downloadBtn.classList.contains("disable-timer")) {
        return location.href = fileLink;
    }
    let timer = downloadBtn.dataset.timer;
    downloadBtn.classList.add("timer");
    downloadBtn.innerHTML = `Tunggu <b>${timer}</b>detik ya om:3`;
    const initCounter = setInterval(() => {
        if(timer > 0) {
            timer--;
            return downloadBtn.innerHTML = `Tunggu <b>${timer}</b>detik ya Om:3`;
        }
        clearInterval(initCounter);
        location.href = fileLink;
        downloadBtn.innerText = "Mengalihkan Link...";
        setTimeout(() => {
            downloadBtn.classList.replace("timer", "disable-timer");
            downloadBtn.innerHTML = `<span class="icon material-symbols-rounded">vertical_align_bottom</span>
                                     <span class="text">Download Again</span>`;
        }, 3000);
    }, 1000);
}

downloadBtn.addEventListener("click", initTimer);