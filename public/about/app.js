function textHide(e) {
    var headText = document.getElementById("headText")
    console.log(e.id);
    if (e.id === "1") {
        headText.style.display = "none"
        e.id = "2"
    }
    else {
        headText.style.display = "block"
        e.id = "1"

    }
}