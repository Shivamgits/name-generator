const name = document.getElementById("name");
const tag = document.querySelector(".tags");

const addName = () => {
    const tags = document.createElement("div");
    tags.setAttribute("class","tag");
    tags.innerText = `Hi,My name is ${name.value}`;
    tag.append(tags);
}