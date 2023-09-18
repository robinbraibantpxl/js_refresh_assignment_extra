let data = [[7,8,9], [4,5,6], [1,2,3], [0,".","="]];

let calcWrapper = document.getElementsByTagName("output-calculator")[0];
let table = document.createElement('table');

data.forEach((subList) => {
    let row = document.createElement('tr');
    subList.forEach((buttonValue) => {
        let cell = document.createElement('td');
        let button = document.createElement('button');
        button.textContent = buttonValue;
        button.classList.add("button");
        button.classList.add("button-primary");
        button.addEventListener('click', calculate);
        cell.appendChild(button);
        row.appendChild(cell);
    });
    table.appendChild(row);
});

calcWrapper.appendChild(table);

let list = [];
let resultBlock = document.getElementsByTagName("output-result")[0];
let unorderedList = document.createElement('ul');
resultBlock.appendChild(unorderedList);

function calculate() {
    if(this.textContent === '=') {
        let listItem = document.createElement('li');
        listItem.innerText = list.join('');
        unorderedList.appendChild(listItem);
        list = [];
    } else {
        list.push(this.textContent);
    }
}