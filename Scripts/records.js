fetch('Yml/records.yml')
.then(response => response.text())
.then(data => {
    const records = jsyaml.load(data);
    let output = `<h2 class="${records.class || ''}">${records.title}</h2><br><p>${records.description}</p><br>`;
    
    records.sections.forEach(section => {
        output += `<h3 class="${section.class || ''}">${section.title}</h3>`;
        if (section.image) {
            output += `<br><img class="${section.image.class || ''}" src="${section.image.src}" alt="${section.image.alt}"><br><br>`;
        }
        section.records.forEach(record => {
            output += `<p><b>${record.title}:</b> ${record.description}</p><br>`;
        });

        if (section.additional_image) {
            output += `<img class="${section.additional_image.class || ''}" src="${section.additional_image.src}" alt="${section.additional_image.alt}"><br>`;
        }
    });

    document.querySelector('.facts').innerHTML = output;
})
.catch(error => {
    console.error("Error loading YML:", error);
    document.querySelector('.facts').innerHTML = "<p>Error loading records. Please try again later.</p>";
});
