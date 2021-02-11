// html
<div id='box' class="box">

// css
.box {
  width: 400px;
  height: 300px;
  background: #848be2;
}

// js
const box = document.getElementById('box')

box.addEventListener('mousedown', (e) => {
  const target = e.target
  const rect = target.getBoundingClientRect()
  const x = e.clientX - rect.left
  const y = e.clientY - rect.top

  console.log(x, y)
})
