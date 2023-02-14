function sisi() {
    let alert = document.getElementById("alert");
    let alert2 = document.getElementById("alert2");

    if(fname.value=="") {
        alert.style.visibility = "visible";
        alert.classList = "alert alert-danger alert-dismissible"
    }
    else {
        alert.style.visibility = "hidden";
    }

    if(lname.value=="") {
        alert2.style.visibility = "visible";
        alert2.classList = "alert alert-danger alert-dismissible"
    }
    else {
        alert2.style.visibility = "hidden";
    }
}