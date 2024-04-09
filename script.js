let x = 0;
document.getElementById('greetBtn').addEventListener('click', function() {
    const greetings = [
        "Eid Mubarak!",
        "Happy Eid!",
        "May your Eid be blessed!",
        "Wishing you joy and happiness on Eid!",
        "May this Eid bring you peace and prosperity!",
        "Eid Saeed!"
    ];

    const randomX = Math.floor(Math.random() * greetings.length);
    const randomY = Math.floor(Math.random() * greetings.length);
    const btn = document.getElementById("greetBtn");
    const hide = document.getElementById("hide");
    const img = document.getElementById("img");
    const h = document.getElementById("main message");
    const video = document.getElementById("video");
    if(x ==  0){
        btn.style.right = "10%";
        img.src = "images/chemsHalal.webp";
        h.innerText = "هاي شنو! ارجع دوسها";
        hide.style.display="none"
    }else if(x == 1){
        btn.style.top = "0%";
        img.src = "images/chemsBtn.jpg";
        h.innerText = "يعني انت صدك تحجي؟ دوسها عمي";
    }
    else if(x == 2){
        btn.style.top = "50%";
        img.src = "images/chems.png";
        h.innerText = "حالتك هسة ⬇️⬇️";
    }else if(x == 3){
        btn.style.top = "70%";
        img.src = "images/waiting.jpg";
        h.innerText = "اني وجاي انتظرك تخلص";
    } else if(x == 4){
        img.src = "images/you.jpg";
        h.innerText = "انت وجاي تنتظر هاي السالفة شوكت تخلص";
        btn.style.top = "60%";
        btn.style.right = "50%";
    }else if(x == 5){
        img.style.display = "none"
        h.style.display = "none"
        btn.style.display = "none"
        video.style = "top:50%; right:50%;"
        video.innerHTML = "<iframe width=\"560\" height=\"315\" src=\"https://www.youtube.com/embed/UwBLTVqKPOI?si=cGCiXImXN8a-kA8e&amp;start=21\" title=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share\" referrerpolicy=\"strict-origin-when-cross-origin\" allowfullscreen></iframe>"

    }
    x += 1
});
