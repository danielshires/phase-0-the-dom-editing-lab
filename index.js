const element = document.createElement('div')
const h1 = document.createElement("h1")
const p = document.createElement("p")
const table = document.createElement('table')

document.body.appendChild(h1)
h1.innerHTML = "My HTML adventure"

document.body.appendChild(p)
document.body.appendChild(table)

const strong = document.createElement('strong')
const em = document.createElement('em')
const a = document.createElement('a')

a.setAttribute("href", "https://developer.mozilla.org/en-US/docs/Web/HTML")


p.appendChild(strong)
p.appendChild(em)
p.appendChild(a)
    // 

const ul = document.createElement('ul');

for (let i = 0; i < 3; i++) {
    const li = document.createElement('li');
    li.innerHTML = (i + 1).toString();
    ul.appendChild(li);
}

element.appendChild(ul);