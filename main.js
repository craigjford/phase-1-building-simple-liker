const EMPTY_HEART = '♡'
const FULL_HEART = '♥'
/*
document.getElementById("modal").onload = function ()
{
  console.log('in load')
  document.getElementById("modal").classList.add("hidden")
}
let modal = document.querySelector("#modal");

modal.addEventListener('load', (event) => {
   console.log('modal has been loaded')
   modal
}

*/
/*
document.addEventListener("load", () => {
    console.log('into program')
    //document.getElementById("modal").hidden = true
    document.getElementById("modal").classList.add('hidden')
    //ç;
    //document.getElementById("modal").modal("hide")
    console.log('baja1');
    console.log('baja1');
})  
*/
let element = document.querySelectorAll('li span')[0];
element.addEventListener('click', handleHeart)

function closeHeart() {
    element.innerHTML = '&#x2661';
    element.classList.remove("activated-heart") 
}

function openHeart() {
  //element.innerHTML = '&#x2665';
  //element.classList.add("activated-heart");

  mimicServerCall()
  .then(resp => resp.json())
  .then(data => {
      element.innerHTML = '&#x2665';
      element.classList.add("activated-heart") ;
  })
  .catch(function (error) {
      let errMsg = document.querySelectorAll("h2")[0].innerHTML = 'ERROR' + '  ' + error;
      document.getElementById("modal").removeAttribute("hidden");
      setTimeout(() => { document.getElementById("modal").classList.add('hidden')}, 3000);
  })
}

function handleHeart() {
  debugger
    if (element.innerHTML === EMPTY_HEART) {
        openHeart();
    } else {
        closeHeart();
    } 
}

//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
