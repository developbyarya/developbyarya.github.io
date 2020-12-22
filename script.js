function Toggle(){
    const Option = document.querySelector("#option");
    Option.classList.toggle('active');
}
function changeWebContent(id)
{
    const navImg = document.querySelector("img#nav-logo");
    const mainImg =document.querySelector("img#main-pic");
    const navBtn = document.getElementById("nav-signUp");
    const secBtn = document.getElementById("sec-btn");
    switch (id){
        case "green":
            mainImg.getAttributeNode("width").value = 600;
            mainImg.style.marginTop = "0px";
            break;
        case "red":
            mainImg.getAttributeNode("width").value = 600;
            mainImg.style.marginTop = "75px";
            break;
        case "blue":
            mainImg.getAttributeNode("width").value = 530;
            mainImg.style.marginTop = "20px";
            break
        case "purple":
            mainImg.getAttributeNode("width").value = 585;
            mainImg.style.marginTop = "0px";
            break
        case "light-blue":
            mainImg.style.marginTop = "60px";
            mainImg.getAttributeNode("width").value = 650;
            break
    }
    navImg.getAttributeNode("src").value = "./pic/logo/"+id+".png";
    mainImg.getAttributeNode("src").value = "./pic/"+id+".png";
    navBtn.getAttributeNode("data-color").value = id;
    secBtn.getAttributeNode("data-color").value = id;
}
function changeToggleContent(id)
{
    const btnChooser = document.getElementById("chooser").getAttributeNode("value");
    btnChooser.value = id;
    changeWebContent(id);
    Toggle();
}