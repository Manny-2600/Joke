fetch('https://v2.jokeapi.dev/joke/Any')
      .then(response => response.json())
      .then(json => console.log(json))  


let data = async()=>{
    let res = await fetch('https://v2.jokeapi.dev/joke/Any');
     let data = await response;
    console.log('async', data)
}