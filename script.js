

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