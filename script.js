let joke = document.getElementById('joke');
let jokeBtn = document.getElementById('jokeBtn');

jokeBtn.addEventListener('click', () => {
    let fakeJoke = document.createElement("h3");
    fakeJoke.classList.add("fakeJoke");
    joke.appendChild(fakeJoke);
    
    let jks = document.querySelector(".fakeJoke");

    fetch("https://api.chucknorris.io/jokes/random")
    .then((response)=>{
        return response.json();
    })
    .then((data)=>{
      let generatedJoke = data.value;
      jks.innerText = generatedJoke;
    })
    .catch((err)=>
    {
        console.log(err);
    });
});

