likes = {
    "user_like_count" : 3,
    "neil_m" : 9,
    "nichole_k" : 12,
    "jim_r" : 9
};

function update_likes(){
    for (let [key, value] of Object.entries(likes)) {
        document.getElementById(key).innerText = value + " like(s)"
    }
}

function like(id){
    if(likes[id] == undefined){
        likes[id] = 1;
    }
    else{
        likes[id]++;
    }
    document.getElementById(id).innerText = likes[id] + " like(s)"
}

update_likes();