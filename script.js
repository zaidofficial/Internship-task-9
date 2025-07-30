 // Top to Bottom Scroll
const btnDown = document.querySelector(".top-to-bottom");
btnDown.onclick = function () {
    window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
};
// bottom to top scroll
const btnUp = document.querySelector(".bottom-to-top");
btnUp.onclick = function () {
    window.scrollTo({ top: 0, behavior: 'smooth' });
};

// light box feature
 // Lightbox simple code
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");

//click only on one image to show lightbox
document.addEventListener("click", function (e) {
    if (e.target.tagName === "IMG" && e.target.closest(".card")) {
        lightboxImg.src = e.target.src;
        lightbox.style.display = "flex";
    }

    // click on light box to close
    if (e.target === lightbox || e.target === lightboxImg) {
        lightbox.style.display = "none";
    }
});