

function getMults() {
    let num = document.getElementById("number-input").value
    let div = document.getElementById("table-output")
    div.replaceChildren()
    num = Math.floor(num)
    for (let i = 1; i <= num; i++) {
        let para = document.createElement("p")
        div.appendChild(para)
        if (Number.isInteger(num / i)) {
            para.innerHTML = `(${i}) * ${num / i} = ${num}\n`
        }
    }
}

for (let i = 0; i < 10; i++) {
   let btn = document.createElement("Button")
   btn.innerHTML = "Placeholder"
   colorify(btn, Math.floor(Math.random() * 256), Math.floor(Math.random() * 256), Math.floor(Math.random() * 256))
   document.getElementById("colored-buttons").appendChild(btn)
}


let coloredButtons = document.getElementById("colored-buttons").getElementsByTagName("button")
let originalColors = []


for (let i = 0; i < 10; i++) {
   originalColors[i] = window.getComputedStyle(document.querySelector("button")).getPropertyValue('background-color')
}


function colorify(element, r, g, b) {
   element.style.backgroundColor = `rgb(${r},${g},${b})`;
}
function colorAll(r, g, b) {
   for (let i = 0; i < 10; i++) {
       let btn = coloredButtons[i]
       colorify(btn, r, g, b)
   }  
}


function randomColors() {
   for (let i = 0; i < coloredButtons.length; i++) {
       let btn = coloredButtons[i]
       colorify(btn, Math.floor(Math.random() * 256), Math.floor(Math.random() * 256), Math.floor(Math.random() * 256))
   }
}


function reset() {
   for (let i = 0; i < coloredButtons.length; i++) {
       let btn = coloredButtons[i]
       btn.style.backgroundColor = originalColors[i]
   }
}
