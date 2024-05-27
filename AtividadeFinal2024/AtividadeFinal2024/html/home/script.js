document.querySelectorAll('nav ul li a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        document.querySelectorAll('section').forEach(section => {
            section.style.display = 'none';
        });

        document.querySelector(this.getAttribute('href')).style.display = 'block';
    });
});

document.querySelectorAll('section').forEach(section => {
    section.style.display = 'none';
});

document.querySelector('#home').style.display = 'block';

function showSearchLabel(show) {
    const searchLabel = document.getElementById('searchLabel');
    if (show) {
        searchLabel.style.display = 'block';
    } else {
        searchLabel.style.display = 'none';
    }
}

function addTag() {
    var newTagInput = document.getElementById("newTag");
    var tagValue = newTagInput.value.trim();
    if (tagValue !== "") {
        var tagContainer = document.getElementById("tagContainer");
        var tagElement = document.createElement("div");
        tagElement.classList.add("tag");
        tagElement.textContent = tagValue;
        tagElement.innerHTML += '<button class="remove-tag" onclick="removeTag(this)">X</button>';
        tagContainer.appendChild(tagElement);
        newTagInput.value = "";
    }
}

function removeTag(tagElement) {
    tagElement.parentElement.remove();
}
function showPostForm() {
 
    let overlay = document.createElement('div');
    overlay.id = 'overlay';
    overlay.style.position = 'fixed';
    overlay.style.top = '0';
    overlay.style.left = '0';
    overlay.style.width = '100%';
    overlay.style.height = '100%';
    overlay.style.backgroundColor = 'rgba(0,0,0,0.5)';
    overlay.style.zIndex = '999';
    document.body.appendChild(overlay);

   
    let formContainer = document.createElement('div');
    formContainer.style.position = 'fixed';
    formContainer.style.top = '50%';
    formContainer.style.left = '50%';
    formContainer.style.transform = 'translate(-50%, -50%)';
    formContainer.style.backgroundColor = '#fff';
    formContainer.style.padding = '20px';
    formContainer.style.borderRadius = '10px';
    formContainer.style.zIndex = '1000';
    formContainer.style.width = '50%';
    overlay.appendChild(formContainer);

  
    let formTitle = document.createElement('h2');
    formTitle.textContent = 'Nova Postagem no Fórum';
    formTitle.style.color = '#333';
    formContainer.appendChild(formTitle);

    let titleInput = document.createElement('input');
    titleInput.type = 'text';
    titleInput.placeholder = 'Título';
    titleInput.style.width = '100%';
    titleInput.style.padding = '5px';
    titleInput.style.marginBottom = '10px';
    titleInput.style.border = '1px solid #ccc';
    titleInput.style.borderRadius = '5px';
    formContainer.appendChild(titleInput);


    let tagsInput = document.createElement('input');
    tagsInput.id = 'tagsInput';
    tagsInput.type = 'text';
    tagsInput.placeholder = 'Tags (separadas por vírgula)';
    tagsInput.style.width = '100%';
    tagsInput.style.padding = '5px';
    tagsInput.style.marginBottom = '10px';
    tagsInput.style.border = '1px solid #ccc';
    tagsInput.style.borderRadius = '5px';
    formContainer.appendChild(tagsInput);


    let predefinedTagsContainer = document.createElement('div');
    predefinedTagsContainer.style.marginBottom = '10px';

    let predefinedTags = ['Dicas Gerais', 'Dicas de Combate', 'Itens'];
    predefinedTags.forEach(tag => {
        let tagButton = document.createElement('button');
        tagButton.textContent = tag;
        tagButton.style.marginRight = '5px';
        tagButton.style.marginBottom = '5px';
        tagButton.style.padding = '5px 10px';
        tagButton.style.border = '1px solid #ccc';
        tagButton.style.borderRadius = '5px';
        tagButton.style.cursor = 'pointer';

        tagButton.addEventListener('click', function() {
            let currentTags = tagsInput.value.split(',').map(t => t.trim()).filter(t => t);
            if (!currentTags.includes(tag)) {
                currentTags.push(tag);
                tagsInput.value = currentTags.join(', ');
            }
        });

        predefinedTagsContainer.appendChild(tagButton);
    });

    formContainer.appendChild(predefinedTagsContainer);


    let textArea = document.createElement('div');
    textArea.contentEditable = true;
    textArea.style.width = '100%';
    textArea.style.height = '200px';
    textArea.style.padding = '5px'; 
    textArea.style.marginBottom = '10px';
    textArea.style.border = '1px solid #ccc';
    textArea.style.borderRadius = '5px';
    textArea.style.overflow = 'auto';
    textArea.style.backgroundColor = '#fff'; 
    textArea.style.color = '#000'; 
    formContainer.appendChild(textArea);
    textArea.focus(); 


    let boldButton = document.createElement('button');
    boldButton.textContent = 'B';
    boldButton.style.fontWeight = 'bold';
    boldButton.style.marginRight = '5px';
    formContainer.appendChild(boldButton);

    let italicButton = document.createElement('button');
    italicButton.textContent = 'I';
    italicButton.style.fontStyle = 'italic';
    italicButton.style.marginRight = '5px';
    formContainer.appendChild(italicButton);

    let underlineButton = document.createElement('button');
    underlineButton.textContent = 'U';
    underlineButton.style.textDecoration = 'underline';
    underlineButton.style.marginRight = '5px';
    formContainer.appendChild(underlineButton);


    let imageButton = document.createElement('input');
    imageButton.type = 'file';
    imageButton.accept = 'image/*';
    imageButton.style.display = 'none';
    formContainer.appendChild(imageButton);

    let imageButtonLabel = document.createElement('label');
    imageButtonLabel.textContent = 'Adicionar Imagem'
    imageButtonLabel.htmlFor = 'imageInput';
    imageButtonLabel.style.backgroundColor = 'blue';
    imageButtonLabel.style.color = '#fff';
    imageButtonLabel.style.padding = '10px 20px';
    imageButtonLabel.style.border = 'none';
    imageButtonLabel.style.borderRadius = '5px';
    imageButtonLabel.style.cursor = 'pointer';
    imageButtonLabel.style.marginRight = '10px';
    formContainer.appendChild(imageButtonLabel);

  
    imageButtonLabel.addEventListener('click', function() {
        imageButton.click();
    });


    imageButton.addEventListener('change', function(e) {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = function(event) {
                const img = document.createElement('img');
                img.src = event.target.result;
                img.style.maxWidth = '100%';
                textArea.appendChild(img);
            }
            reader.readAsDataURL(file);
        }
    });

 
    let submitButton = document.createElement('button');
    submitButton.textContent = 'Postar';
    submitButton.style.backgroundColor = 'green';
    submitButton.style.color = '#fff';
    submitButton.style.padding = '10px 20px';
    submitButton.style.border = 'none';
    submitButton.style.borderRadius = '5px';
    submitButton.style.cursor = 'pointer';
    formContainer.appendChild(submitButton);

 
    let cancelButton = document.createElement('button');
    cancelButton.textContent = 'Cancelar';
    cancelButton.style.backgroundColor = 'red';
    cancelButton.style.color = '#fff';
    cancelButton.style.padding = '10px 20px';
    cancelButton.style.border = 'none';
    cancelButton.style.borderRadius = '5px';
    cancelButton.style.cursor = 'pointer';
    cancelButton.style.marginLeft = '10px';
    formContainer.appendChild(cancelButton);


    cancelButton.addEventListener('click', function() {
        document.body.removeChild(overlay);
    });


    boldButton.addEventListener('click', function() {
        document.execCommand('bold', false, null);
    });
    italicButton.addEventListener('click', function() {
        document.execCommand('italic', false, null);
    });
    underlineButton.addEventListener('click', function() {
        document.execCommand('underline', false, null);
    });

    submitButton.addEventListener('click', function() {
        alert('Postagem salva!');
        document.body.removeChild(overlay);
    });
}


document.querySelector('.postar-forum').addEventListener('click', showPostForm);

                    
document.addEventListener('DOMContentLoaded', function() {
    const tags = document.querySelectorAll('.tag button.remove-tag');
    
    tags.forEach(button => {
        button.addEventListener('click', function() {
            this.parentElement.remove();
        });
    });
});
