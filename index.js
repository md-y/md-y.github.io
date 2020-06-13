fetch("https://api.github.com/users/md-y/repos").then(async (res) => {
    repos = await res.json();

    // Sort by stargazers then by update date
    repos.sort((a, b) => {
        let dif = b.stargazers_count - a.stargazers_count;
        if (dif === 0) return (new Date(b.updated_at) - new Date(a.updated_at));
        return dif;
    });

    content = document.getElementById("content");

    for (let repo of repos) {
        let elem = document.createElement("div");
        elem.innerHTML = getRepoCard(repo);
        content.append(elem);
    }
});

function getRepoCard(repo) {
    titleClasses = "card-title mb-0";
    if (repo.archived) titleClasses += " archived";
    if (repo.fork) titleClasses += " fork";
    elementHTML = `<div class="card m-4"> <div class="card-body">`;
    elementHTML += `<h5 class="${titleClasses}">${repo.full_name}</h5>`;

    elementHTML += `<div class="mb-2">${getRepoTags(repo)}</div>`;

    if (repo.license) elementHTML += `<small class="license">${repo.license.name}</small>`;

    elementHTML += `<p class="card-text">${repo.description}</p>`;

    elementHTML += `<a href="${repo.html_url}" class="btn btn-primary" target="_blank">Open Repo</a>`;
    if (repo.homepage.includes("md-y.github.io") && !repo.archived) elementHTML += `<a href="${repo.homepage}" class="btn btn-primary ml-1">Run</a>`;
    else elementHTML += `<a href="${repo.html_url}/blob/master/README.md" class="btn btn-primary ml-1">Open README</a>`;

    return elementHTML;
}

function getRepoTags(repo) {
    let tags = {};
    tags.language = repo.language;
    if (repo.stargazers_count > 1) tags.stars = repo.stargazers_count;
    if (repo.forks_count > 0) tags.forks = repo.forks_count;
    if (repo.watchers_count > 2) tags.watchers = repo.watchers_count;

    payload = "";
    for (let key in tags) payload += `<span class="badge badge-light footer-badge m-0 mr-1 shadow-sm border">${key}: ${tags[key]}</span>`;

    return payload;
}