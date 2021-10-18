num_likes = 3;

function like(id){
    num_likes++;
    document.getElementById("user_like_count").innerText = num_likes + " like(s)"
}