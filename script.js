// Script para mostrar/ocultar la información adicional
document.querySelectorAll('.btn-vermas').forEach(button => {
    button.addEventListener('click', () => {
        const moreInfo = button.nextElementSibling;
        if (moreInfo.style.display === "none" || moreInfo.style.display === "") {
            moreInfo.style.display = "block";
            button.innerText = "Ver menos";
        } else {
            moreInfo.style.display = "none";
            button.innerText = "Ver más";
        }
    });
});



