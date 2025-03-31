fetch('records.yaml')
.then(response => response.text())
.then(data => {
    const records = jsyaml.load(data);
    let output = `<h2>${records.title}</h2><p>${records.description}</p>`;
    
    records.sections.forEach(section => {
        output += `<h3>${section.title}</h3>`;
        if (section.image) {
            output += `<img src="${section.image.src}" alt="${section.image.alt}" 
                        style="height:${section.image.height}; width:${section.image.width}; margin:0 auto; display:block;">`;
        }
        section.records.forEach(record => {
            output += `<p><b>${record.title}:</b> ${record.description}</p>`;
        });
        
        if (section.additional_image) {
            output += `<img src="${section.additional_image.src}" alt="${section.additional_image.alt}">`;
        }
    });

    document.querySelector('.facts').innerHTML = output;
})
.catch(error => console.error("Error loading YAML:", error));
