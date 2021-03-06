const cards=document.querySelector("#cards");
const divbtn=document.querySelector("#divbtn");
const button=document.querySelector("button");
let page=1;
async function contenu(page){
    let content="";
    let listUser= await fetch(`https://reqres.in/api/users?page=${page}`).then(response => response.json()).then(objetJson => objetJson.data);
    listUser.forEach(user => {
        content += `<div class="col">
                        <div class="card h-100">
                            <img src=${user.avatar} class="card-img-top"  alt="">
                            <div class="card-body">
                                <h5 class="card-title">${user.first_name} ${user.last_name}</h5>
                                <p" class="card-text">${user.email}</p>
                            </div>
                        </div>
                    </div>`;
    }); 
    cards.innerHTML=content;
}
function render(){
    if (page==1){
        contenu(1);       
        button.innerHTML=">> Page suivante";
        divbtn.classList.add("d-grid");
        page=2;
    }else{
        contenu(2);
        button.innerHTML="Page précédente <<";
        divbtn.classList.remove("d-grid");
        page=1;
    }
}

window.addEventListener("load",render);
button.addEventListener("click",render);