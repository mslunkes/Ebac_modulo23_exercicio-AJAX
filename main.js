document.addEventListener('DOMContentLoaded', function(){
    const avatar = document.querySelector('#avatar')
    const name = document.querySelector('#name')
    const username = document.querySelector('#username')
    const repositorio = document.querySelector('#repositorio')
    const followers = document.querySelector('#followers')
    const following = document.querySelector('#following')
    const link = document.querySelector('#link')

    fetch('https://api.github.com/users/mslunkes').then(function(res){
        return res.json()
    })

    .then(function(json) {
        avatar.src = json.avatar_url
        name.innerText = json.name
        username.innerText = json.login
        repositorio.innerText = json.public_repos
        followers.innerText = json.followers
        following.innerText = json.following
        link.href = json.html_url

    })
    fetch('https://api.github.com/users/mslunkes/followers')
    .then(res => res.json())
    .then(followers => {
        followersElement.innerText = followers.length;
    });

    fetch('https://api.github.com/users/mslunkes/followers')
    .then(res => res.json())
    .then(following => {
        followingElement.innerText = following.length;
    });
})
.catch(function(error) {
console.log('Ocorreu um erro:', error);
})