const fetchdatabtn=document.querySelector('#fetchedata')

fetch("https://icanhazdadjoke.com/slack")
.then(data=> data.json())
.then(jokeData=>{
    const jokeText=jokeData.attachments[0].text;
    const jokeElement=document.getElementById('jokeElement');

    jokeElement.innerHTML=jokeText;
})


const getdata=function()
{
    fetch("https://icanhazdadjoke.com/slack")
.then(data=> data.json())
.then(jokeData=>{
    const jokeText=jokeData.attachments[0].text;
    const jokeElement=document.getElementById('jokeElement');

    jokeElement.innerHTML=jokeText;
})

}

fetchdatabtn.addEventListener('click',getdata)