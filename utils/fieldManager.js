// By nightcoreat

function addField() {
    const fieldTitle = document.getElementById('fieldTitleInput').value;
    const fieldValue = document.getElementById('fieldValueInput').value;
    const inline = document.getElementById('inlineInput').checked;

    if (!fieldTitle || !fieldValue) return; 

    const fieldContainer = document.getElementById('fieldsContainer');
    const fieldDiv = document.createElement('div');
    fieldDiv.classList.add('field');
    if (inline) {
        fieldDiv.classList.add('inline'); 
    }

    fieldDiv.innerHTML = `
        <strong>${fieldTitle}</strong>: <span>${fieldValue}</span>
        <input type="checkbox" class="field-inline" ${inline ? 'checked' : ''}> inline
    `;
    
    fieldContainer.appendChild(fieldDiv);
    updateRemoveButtonVisibility();
}

function removeFields() {
    const fieldContainer = document.getElementById('fieldsContainer');
    fieldContainer.innerHTML = '<button onclick="removeFields()">Delete All Existing Fields</button>';
}

function updateRemoveButtonVisibility() {
    const fieldContainer = document.getElementById('fieldsContainer');
    const removeButton = fieldContainer.querySelector('button');
    if (fieldContainer.children.length > 1) {
        removeButton.style.display = 'block';
    } else {
        removeButton.style.display = 'none';
    }
}