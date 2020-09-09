// import * as data from "./structure.json"
// import json from"./structure.json"
window.addEventListener('DOMContentLoaded',()=>{
  fetch("structure.json")
      .then((response)=>{
        return response.json()
      })
      .then(result=>{ 
        result.forEach(obj => {
            let a = document.createElement('a')
            a.textContent = obj.name
            // a.href = obj.url
            a.style.cursor ='pointer'
            a.style.display = 'block'
            a.addEventListener('click',(e)=>{
              e.preventDefault()
        
              fetch(`${obj.url}`)
                  .then((response) => { return response.text();})
                  .then(result => mdToHTML(result))
                  .catch((error)=>{console.log(error)})
            })
            document.querySelector('#here').appendChild(a)
        });
      })

  


  // let json = [
  //   {"name":"chapter-1","url":"/chapter-1.md"},
  //   {"name":"session_1-1","url":"/session_1-1.md"},
  //   {"name":"session_1-2","url":"/session_1-2.md"},
  //   {"name":"chapter-2","url":"/chapter-2.md"},
  //   {"name":"chapter-3","url":"/chapter-3.md"}
  // ]
 
  // json.forEach((obj)=>{
  //   let a = document.createElement('a')
  //   a.textContent = obj.name
  //   a.href = obj.url
  //   a.style.cursor ='pointer'
  //   a.style.display = 'block'
  //   a.addEventListener('click',(e)=>{
  //     e.preventDefault()

  //     fetch(`${obj.url}`)
  //         .then((response) => { return response.text();})
  //         .then(result => mdToHTML(result))
  //         .catch((error)=>{console.log(error)})
  //   })
  //   document.querySelector('#here').appendChild(a)
  // })

  function mdToHTML(result) {
    var text = result,
        target = document.getElementById('show'),
        converter = new showdown.Converter(),
        html = converter.makeHtml(text);
        target.innerHTML = html;
  }
})