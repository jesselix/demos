const fs = require("fs")

// 渲染线程中使用node.js的第一种方法：通过preload加载js
// fs.readFile("test2.txt", (err, data) => {
//   if (err) {
//     console(err)
//     return
//   }

//   console.log(data.toString())
// })


window.onload = () => {
  console.log("123")
  buttonDom = document.getElementById("button");
  textDom = document.getElementById("text");

  // function clickButton() {
  //   // document.getElementById("openFile").click()
  //   // alert("fdgffdgfd77777777777777")

  //   fs.readFile("test.txt", (err, data) => {
  //     if (err) {
  //       console(err)
  //       return;
  //     }

  //     console.log(data.toString())
  //     textDom.innerHTML = data.toString()
  //   })
  // }

  // // clickButton()

  // buttonDom.onclick = () => {
  //   clickButton()
  // }

  textDom.ondragenter = textDom.ondragover = textDom.ondragleave=()=>{
    return false;
  }

  textDom.ondrop=(e)=>{
    console.log("eee")
    console.log(e)

    var path = e.dataTransfer.files[0].path;
    fs.readFile(path, (err, data)=>{
      if(err) {
        console.log(err)
        return false
      }

      textDom.innerHTML = data.toString()
    })
  }
}