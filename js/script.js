async function render(){
    let content="";
    let listUser= await fetch("https://reqres.in/api/users").then(response => response.json()).then(objetJson => objetJson.data);
    const listUser2= await fetch("https://reqres.in/api/users?page=2").then(response => response.json()).then(objetJson => objetJson.data);
    listUser=listUser.concat(listUser2);
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
    const cards=document.querySelector("#cards");
    cards.innerHTML+=content;
}
window.addEventListener("load",render);