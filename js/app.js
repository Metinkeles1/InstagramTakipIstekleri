var requestBody = document.querySelector('#requests');
requestBody.addEventListener('click', (e) => {
    if (e.target.parentElement.id === "request") {
        e.target.parentElement.parentElement.parentElement.classList.add("opacity-50")
    }
})