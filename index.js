require('dotenv').config()
const express = require('express')
const app = express()
const port = 4000
// total ports = 65535 (Many of them are free)

const githubData = {
    "login": "khushi-gunnu17",
    "id": 144596705,
    "node_id": "U_kgDOCJ5e4Q",
    "avatar_url": "https://avatars.githubusercontent.com/u/144596705?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/khushi-gunnu17",
    "html_url": "https://github.com/khushi-gunnu17",
    "followers_url": "https://api.github.com/users/khushi-gunnu17/followers",
    "following_url": "https://api.github.com/users/khushi-gunnu17/following{/other_user}",
    "gists_url": "https://api.github.com/users/khushi-gunnu17/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/khushi-gunnu17/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/khushi-gunnu17/subscriptions",
    "organizations_url": "https://api.github.com/users/khushi-gunnu17/orgs",
    "repos_url": "https://api.github.com/users/khushi-gunnu17/repos",
    "events_url": "https://api.github.com/users/khushi-gunnu17/events{/privacy}",
    "received_events_url": "https://api.github.com/users/khushi-gunnu17/received_events",
    "type": "User",
    "site_admin": false,
    "name": "Khushi Sharma",
    "company": null,
    "blog": "",
    "location": "India",
    "email": null,
    "hireable": true,
    "bio": null,
    "twitter_username": null,
    "public_repos": 14,
    "public_gists": 0,
    "followers": 1,
    "following": 8,
    "created_at": "2023-09-10T11:11:50Z",
    "updated_at": "2024-01-25T08:50:01Z"
}

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/twitter', (req, res) => {
    res.send('khushiastrogeek')
})

app.get('/login', (req, res) => {
    res.send('<h1>Please log in at khushi services.</h1>')
})

app.get('/youtube', (req, res) => {
    res.send("<h2>YouTube</h2>")
})

app.get('/github', (req, res) => {
    res.json(githubData)
})

app.listen(process.env.PORT, () => {
    console.log(`Example app listening on port : ${port}`);
})

// paid app deployements
// hiroku
// digitalocean
// railway
// seenode
// render
// cyclic.sh