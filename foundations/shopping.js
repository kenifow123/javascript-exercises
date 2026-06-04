// let list = document.querySelector("ul");
// let input = document.querySelector("input");
// let button = document.querySelector("button");
//
// button.addEventListener("click", (event) => {
//     event.preventDefault();
//     const val = input.value;
//     input.textContent = "";
//     const item = document.createElement("li");
//     const span = document.createElement("span");
//     const btn = document.createElement("button");
//
//     span.textContent = val;
//     btn.textContent = "Delete";
//
//     span.appendChild(btn);
//     item.appendChild(span);
//     list.appendChild(item);
//
// });

console.log('awefef');
const list = document.querySelector("ul");
const input = document.querySelector("input");
const button = document.querySelector("button");

// const x = document.querySelector("h1");
// x.textContent = "AWFAWF";
// list.appendChild(x);


button.addEventListener("click", (event) => {
    // event.preventDefault();

    const myItem = input.value;
    input.value = "";

    const listItem = document.createElement("li");
    const listText = document.createElement("span");
    const listBtn = document.createElement("button");

    listItem.appendChild(listText);
    listText.textContent = myItem;
    listItem.appendChild(listBtn);
    listBtn.textContent = "Delete";
    list.appendChild(listItem);

    listBtn.addEventListener("click", () => {
        list.removeChild(listItem);
    });

    input.focus();
});

