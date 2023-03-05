const APIURL = "https://api.github.com/users/";
const main = document.querySelector("main");
const searchbox = document.querySelector("#search");

const getUser = async (username) => {
  const response = await fetch(APIURL + username);
  const data = await response.json();
  console.log(data);
  const card = `
    <div>
    <img class="avatar" src="${data.avatar_url}" alt="">
</div>
<div class="user-info"  >
    <h2>${data.name}</h2>
    <p>${data.bio}</p>
    <ul class="info" type="none">
        <li> ${data.followers} <strong>Followers</strong></li>
        <li class="margin">${data.following} <strong>Following</strong></li>
        <li>${data.public_repos} <strong>Repos</strong></li>
    </ul>
    <div id="repos">
    </div>
</div> `;
  main.innerHTML = card;
  getrespo(username);
};

getUser("taylorotwell");

const getrespo = async (username) => {
  const repos = document.querySelector("#repos");
  const response = await fetch(APIURL + username + "/repos");
  const data = await response.json();
  data.forEach((item) => {
    const elem = document.createElement("a");
    elem.classList.add("repo");
    elem.href = item.html_url;
    elem.innerText = item.name;
    elem.target= "_blank";
    repos.appendChild(elem);
  });
};

function formsubmit(){
    if (searchbox.value != "") {
        getUser(searchbox.value);

        searchbox.value =""
    }

    return false;
}

searchbox.addEventListener("focusout",formsubmit);
