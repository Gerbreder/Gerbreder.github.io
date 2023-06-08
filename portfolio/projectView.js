function loadfunction(projects) {
    console.log(projects[0].name);
    const projectList = document.getElementById("project-list");
    for (var i = 0; i < projects.length; i++) {
        div = document.createElement("div");
        div.style.className =  "project";
        console.log(projectList);
        title = document.createElement("h1");
        title.innerHTML = projects[i].name;
        div.appendChild(title);
        projectList.appendChild(div);
    }
}

// starts json parsing and send it to the load function
fetch('./projects.json')
    .then((response) => response.json())
    .then((json) => loadfunction(json.projects));