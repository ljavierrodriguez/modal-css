window.onload = () => {
    let imgs = document.querySelectorAll(".img");

    imgs.forEach((img) => {
        img.addEventListener("click", (e) => {
            let imgModal = document.querySelector(".img-modal");
            imgModal.src = e.target.src;
            let modal = document.querySelector(".modal");
            modal.style.display = 'block';
        });
    })
    

    let span = document.querySelector(".close");
    span.addEventListener("click", () => {
        let modal = document.querySelector(".modal");
        modal.style.display = 'none';
    });
}