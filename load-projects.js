function createProjectCard (projectJson) {
    const { title, description, tags, image, github, demo } = projectJson;
    let tagsList = "";
    tags.forEach(tag => {
        tagsList += `<li class="project-card-tag">${tag}</li>`;
    });
    let demoLink = demo === "" ? "" : `<a href="${demo}" class="btn">Try it <i class="bi bi-eye-fill"></i></a>`;
    return `<div class="col project-col">
        <div class="project-card">
            <div class="project-card-img-wrapper">
                <img class="project-card-img" src="${image}" alt="Card image">
            </div>
            <div>
                <h5 class="project-card-title">${title}</h5>
                <p class="project-card-desc">${description}</p>
                <ul class="project-card-tag-list">${tagsList}</ul>
                <a href="${github}" class="btn">GitHub <i class="bi bi-github"></i></a>
                ${demoLink}
            </div>
        </div>
    </div>`;
}

$.ajax({
    type: "Get",
    url: "/projects.json",
    dataType: "json",
    success: function(data) {
        data.projects.forEach(project => {
            $("#projects .row").append(createProjectCard(project));
        });
    },
    error: function(){
        alert("Error reading JSON.");
    }
});
