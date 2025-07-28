async function alpha(){
    let btn=document.getElementById("click-ok");
    btn.addEventListener("click",async ()=>{
        let field = document.getElementById("text-field");
        let value = field.value;
        let apikey =""
        let url =`https://api.giphy.com/v1/gifs/search?api_key=${apikey}&q=${value}&limit=10&offset=0&rating=g&lang=en`
        let response = await fetch(url)
        let img=await response.json();
        let im = document.getElementById("img-container");
        im.src=img.data[Math.trunc(Math.random()*10)].images.original.url;
        console.log(im.src);
    })
}
alpha()