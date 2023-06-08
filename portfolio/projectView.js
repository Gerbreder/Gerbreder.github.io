function loadfunction(projects) {
    const projectList = document.getElementById("project-list");

    for (var i = 0; i < projects.length; i++) {
        // element creation
        div = document.createElement("div");
        title = document.createElement("h1");
        image = document.createElement("img");
        description = document.createElement("p");
        link = document.createElement("a");
        divisor = document.createElement("div");
        dates = document.createElement("p");

        // elements style properties
        div.setAttribute("class", "project");
        title.setAttribute("class", "project-title");
        image.setAttribute("class", "project-image");
        description.setAttribute("class", "project-description");
        dates.setAttribute("class", "project-dates");
        link.setAttribute("class", "project-link");
        divisor.setAttribute("class", "project-divisor");
        image.setAttribute("src", projects[i].photo);
        link.setAttribute("href", projects[i].url);
        

        // elements details 
        title.innerHTML = projects[i].name;
        description.innerHTML = projects[i].description + " ";
        dates.innerHTML = projects[i].dates;
        link.innerHTML = projects[i].link;

        // combine elements together
        div.appendChild(image);
        div.appendChild(title);
        div.appendChild(description);
        description.appendChild(link);
        div.appendChild(divisor);
        div.appendChild(dates);
        projectList.appendChild(div);
    }
}

// starts json parsing and send it to the load function
fetch('./projects.json')
    .then((response) => response.json())
    .then((json) => loadfunction(json.projects));