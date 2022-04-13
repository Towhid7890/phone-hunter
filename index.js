document.getElementById('button-search').addEventListener('click', ()=>{
   const inputText = document.getElementById('input-text').value;
   url=`https://openapi.programming-hero.com/api/phones?search=${inputText}`;
   fetch(url)
   .then(res => res.json())
   .then(data =>console.log(data))
})