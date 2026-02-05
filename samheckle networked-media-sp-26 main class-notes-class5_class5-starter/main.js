window.onload = () => {
    console.log('the webpage has fully loaded');

    document.getElementById("main").innerHTML = "kaboom";
    document.getElementById('main').style.backgroundColor = "pink";

    let mainContent = document.getElementById('main');

    mainContent.style.color="green";

    //apply an existing or non existing class to my element
    mainContent.classList.add('blue')

    let container = document.getElementById("container");
    //when we add elements with JS, it is three steps
    // first is creating type of element and storing in a variable
    let item = document.createElement("p")
    //the create element function takes in the tag name
    // second is we modify the content of the new elment
    item.textContent='this has been created with JS';
    //add created element to the page via the element it will be added to
    container.appendChild(item);

    let blues = document.getElementsByClassName('blue');
    blues[0].style.color = "red"

    for(let b of blues){
        b.style.color="grey";
    }

}
