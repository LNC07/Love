let currentPage = 1;
document.getElementById("nextPage").addEventListener("click", function() {
    if (currentPage < 7) {
        document.getElementById("page" + currentPage).style.transform = "rotateY(-180deg)";
        currentPage++;
    }
});
