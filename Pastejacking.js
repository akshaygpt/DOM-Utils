// Original source: https://github.com/dxa4481/Pastejacking

// html
<h1>Pastejacking demo</h1>
<main>
  <div>
    <span id='copyable_content'><mark>Some innocent text</mark></span>
    <button type='button'>Copy this</button>
  </div>

  <div>
    <label for='paste_box'>Paste here:</label>
    <input id='paste_box'>
  </div>

  <summary>Try both: clicking the <em>Copy This</em> button or directly copying the highlighted text. We also control which elements to run this on.</summary>
</main>

<aside>We copy command from websites to our terminal/command-line all the time. This is potentially a dangerous practice, since websites could alter the content before pasting to run malicious activities.
Fortunately, <code>document.execCommand</code> is being ruled out of browsers. It is being replaced by the upcoming Clipboard API.</aside>

// css
body {
  font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
  line-height: 1.6rem;
  text-align: center;
}
main {
  padding: 0.5rem;
  border: 1px solid #aaa;
  border-radius: 4px; 
}
main > div {
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 1rem auto;
}
main > div span, main > div label {
  margin-right: 0.5rem;
}
summary {
  margin: 2rem auto 1rem;
  font-size: 0.9rem;
}
aside {
  margin: 2rem auto;
  font-size: 0.9rem;
}

// js
const paste_jack_text = 'Some insecure script'
const copyable_content = document.getElementById('copyable_content') 
const button = document.querySelector('button')
const paste_box = document.getElementById('paste_box')

function pasteJack(e) {

  // RESET the paste box value
  paste_box.value = ''

  // CREATE an input element that will be destroyed later
  // PASTE our text and SELECT it
  const input = document.createElement('input')
  input.value = paste_jack_text
  document.body.appendChild(input)
  input.focus()
  input.select()

  // COPY the selected text
  document.execCommand('copy')

  document.body.removeChild(input)
}

// Pastejack 1: Click button to copy
button.addEventListener('click', pasteJack)
// Pastejack 2: Copy the content using mouse / keyboard
copyable_content.addEventListener('copy', pasteJack)
