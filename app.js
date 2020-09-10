let inputValue = document.querySelector(".search-input");
let searchBtn = document.querySelector(".gLogo");
let menuBtn= document.querySelector(".hamburger-menu");
let firstSpan = document.querySelector(".first");
let secondSpan = document.querySelector(".second");
let thirdSpan = document.querySelector(".third");
let list = document.querySelector(".list");
let microphone = document.querySelector(".micro");
let listeningContainer = document.querySelector(".listening-container");
let endBtn = document.querySelector(".end");




let showSearch = () =>
{
    if(inputValue.value.length >= 1)
    {
        searchBtn.classList.add("gLogoSearch");
    }
    else{
        searchBtn.classList.remove("gLogoSearch");
    }
}

let menuClicked = () =>
{
    firstSpan.classList.toggle("firstClicked");
    secondSpan.classList.toggle("secondClicked");
    thirdSpan.classList.toggle("thirdClicked");
    list.classList.toggle("listOpen");

}

let start = () => 
{
    listeningContainer.style.display = "flex";
    listeningContainer.classList.add("listening-containerOpen");

}

let end = () =>
{
    listeningContainer.style.display = "none";
    listeningContainer.classList.remove("listening-containerOpen");
}


////////////////////////////////VOICE RECOGNITION FUNCTION/////////////////////////////////////////////////

function runSpeechRecognition() {
    var output = document.querySelector(".search-input");
    var action = document.querySelector(".action");
    var SpeechRecognition = SpeechRecognition || webkitSpeechRecognition;
    var recognition = new SpeechRecognition();
    recognition.onstart = function() {
        action.innerHTML = "Say something interesting...";
    };
    
    recognition.onspeechend = function() {
        action.innerHTML = "Stopped listening, hope you are done...";
        recognition.stop();
    }
    recognition.onresult = function(event) {
        var transcript = event.results[0][0].transcript;
        action.innerHTML = transcript;
        output.value = transcript; 

    setTimeout(function()
    {
        listeningContainer.style.display = "none";
        listeningContainer.classList.remove("listening-containerOpen");
        //////////////////////////////////////////////////////////////////////////////////SEARCH/////////////////////////////////////////////////////////////////////
        let searchFraze = inputValue.value;
        let link = "https://www.google.com/search?client=d&q=" + searchFraze;
        let a = document.querySelector(".searchLink");
        a.href = link;
        a.click();

    },2100);

    if(inputValue.value.length >= 1)
    {
        searchBtn.classList.add("gLogoSearch");
    }
    else{
        searchBtn.classList.remove("gLogoSearch");
    }

    };

     recognition.start();
}

//////////////////////////////////////////////////////////////////SEARCH FUNCTION//////////////////////////////////////////////////////////////////
let search = () =>
{
    let searchFraze = inputValue.value;
    let link = "https://www.google.com/search?client=d&q=" + searchFraze;
    let a = document.querySelector(".searchLink");
    a.href = link;

}


inputValue.addEventListener("input", showSearch);
menuBtn.addEventListener("click", menuClicked);
microphone.addEventListener("click", start);
microphone.addEventListener("click", runSpeechRecognition);
endBtn.addEventListener("click", end);
searchBtn.addEventListener("click",search);

inputValue.addEventListener("keypress", function(e)
{
    if (e.keyCode == 13 && inputValue.value.length >= 1) {
        search();
        let a = document.querySelector(".searchLink");
        a.click();
    }
});

