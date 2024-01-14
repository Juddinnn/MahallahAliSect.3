var cafe = document.querySelector("#cafe");
var mosque = document.querySelector("#mosque");
var laundry = document.querySelector("#laundry");
var basketball = document.querySelector("#basketball");
var store = document.querySelector("#store");

//event listeners
cafe.addEventListener("mouseenter", showDesc);
cafe.addEventListener("mouseleave", hideDesc);
mosque.addEventListener("mouseenter", showDesc);
mosque.addEventListener("mouseleave", hideDesc);
laundry.addEventListener("mouseenter", showDesc);
laundry.addEventListener("mouseleave", hideDesc);
basketball.addEventListener("mouseenter", showDesc);
basketball.addEventListener("mouseleave", hideDesc);
store.addEventListener("mouseenter", showDesc);
store.addEventListener("mouseleave", hideDesc);


//show hidden text
function showDesc(event){
    //console.log(event.target);
    this.style.backgroundImage = "none";
    this.style.backgroundColor = "rgba(210, 227, 200, 0.5)";
    this.children[0].style.visibility = "hidden"; //first <p> of the div, class description
    this.children[1].style.visibility = "visible"; //second <p> of the div, class hovertext
  }

//hide hidden text
function hideDesc(event){
    this.children[1].style.visibility = "hidden"; //second <p> of the div, class hovertext
    this.children[0].style.visibility = "visible"; //first <p> of the div, class description
    this.style.background = "none";
    if (this == document.querySelector("#cafe")){
        this.style.backgroundImage = 'url("Images/Image1.jpg")';
        this.style.backgroundPosition = "bottom";
    }else if(this == document.querySelector("#mosque")){
        this.style.backgroundImage = 'url("Images/mosque.jpg")';
        this.style.backgroundPosition = "bottom";
    }else if(this == document.querySelector("#laundry")){
        this.style.backgroundImage = 'url("Images/laundry.jpg")';
    }else if(this == document.querySelector("#basketball")){
        this.style.backgroundImage = 'url("Images/basketball.jpg")';
    }else{
        this.style.backgroundImage = 'url("Images/store.jpg")';
    }
    this.style.backgroundSize = "cover";
    //this.style.visibility = "visible";
}