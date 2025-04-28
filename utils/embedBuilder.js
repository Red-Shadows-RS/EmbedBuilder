// By nightcoreat

function getTitle() {
  return document.getElementById("titleInput").value;
}

function getAuthor() {
  return {
    name: document.getElementById("authorNameInput").value,
    icon_url: document.getElementById("authorIconInput").value,
  };
}

function getDescription() {
  return document.getElementById("descriptionInput").value;
}

function getFields() {
  const fields = [];
  document.querySelectorAll(".field").forEach((field) => {
    const name = field.querySelector("strong").textContent;
    const value = field.querySelector("span").textContent;
    const inlineCheckbox = field.querySelector(".field-inline");
    const inline = inlineCheckbox ? inlineCheckbox.checked : false;

    if (name && value) fields.push({ name, value, inline });
  });
  return fields;
}

function addField() {
  const fieldTitle = document.getElementById("fieldTitleInput").value;
  const fieldValue = document.getElementById("fieldValueInput").value;
  const inline = document.getElementById("inlineInput").checked;

  if (!fieldTitle || !fieldValue) return;

  const fieldContainer = document.getElementById("fieldsContainer");
  const fieldDiv = document.createElement("div");
  fieldDiv.classList.add("field");
  if (inline) {
    fieldDiv.classList.add("inline"); 
  }

  fieldDiv.innerHTML = `
        <strong>${fieldTitle}</strong>: <span>${fieldValue}</span>
        <input type="checkbox" class="field-inline" ${
          inline ? "checked" : ""
        }> inline
    `;

  fieldContainer.appendChild(fieldDiv);
  updateRemoveButtonVisibility();
  updateEmbedPreview(); 
}

function removeFields() {
  const fieldContainer = document.getElementById("fieldsContainer");
  fieldContainer.innerHTML =
    '<button onclick="removeFields()">Delete All Existing Fields</button>';
}

function updateRemoveButtonVisibility() {
  const fieldContainer = document.getElementById("fieldsContainer");
  const removeButton = fieldContainer.querySelector("button");
  if (fieldContainer.children.length > 1) {

    removeButton.style.display = "block";
  } else {
    removeButton.style.display = "none";
  }
}

function getThumbnail() {
  return { url: document.getElementById("thumbnailInput").value };
}

function getImage() {
  return { url: document.getElementById("imageInput").value };
}

function getFooter() {
    return {
      text: document.getElementById("footerInput").value,
      icon_url: document.getElementById("footerIconInput").value,
    };
}

function getColor() {
  return parseInt(selectedColorHex.replace("#", ""), 16);
}

function cleanEmbed(embed) {
  Object.keys(embed).forEach((key) => {
    if (
      embed[key] == null ||
      embed[key] === "" ||
      (Array.isArray(embed[key]) && embed[key].length === 0)
    ) {
      delete embed[key];
    }
  });
  return embed;
}

function updatePreview(embed) {
  const preview = document.getElementById("preview");
  if (!preview) {
    console.error("Preview container not found!");
    return;
  }

  preview.innerHTML = "";

  preview.style.borderLeft = `4px solid ${selectedColorHex}`;
  // ============= Title =============
  if (embed.title) {
    const title = document.createElement("h3");
    title.textContent = embed.title;
    preview.appendChild(title);
  }
  // ============= Author =============
  if (embed.author && (embed.author.name || embed.author.icon_url)) {
    const authorDiv = document.createElement("div");
    authorDiv.className = "author";

    if (embed.author.icon_url) {
      const authorIcon = document.createElement("img");
      authorIcon.src = embed.author.icon_url;
      authorIcon.alt = "Author Icon";
      authorDiv.appendChild(authorIcon);
    }

    if (embed.author.name) {
      const authorName = document.createElement("span");
      authorName.textContent = embed.author.name;
      authorDiv.appendChild(authorName);
    }

    preview.appendChild(authorDiv);
  }

  // ============= Description =============
  if (embed.description) {
    const description = document.createElement("p");
    description.textContent = embed.description;
    preview.appendChild(description);
  }

  // ============= Fields =============
  if (Array.isArray(embed.fields)) {
    const fieldsContainer = document.createElement("div");
    fieldsContainer.classList.add("fields-container");

    embed.fields.forEach((field) => {
      const fieldDiv = document.createElement("div");
      fieldDiv.classList.add("field-preview");

      if (field.inline) {
        fieldDiv.classList.add("inline");
      } else {
        fieldDiv.classList.add("block");
      }

      const fieldName = document.createElement("strong");
      fieldName.textContent = field.name || "No String";
      fieldDiv.appendChild(fieldName);

      const fieldValue = document.createElement("p");
      fieldValue.textContent = field.value || "No Value";
      fieldDiv.appendChild(fieldValue);

      fieldsContainer.appendChild(fieldDiv);
    });

    preview.appendChild(fieldsContainer);
  }

  // ============= Main Image =============
  if (embed.image && embed.image.url) {
    const mainImage = document.createElement("img");
    mainImage.src = embed.image.url;
    mainImage.alt = "Embed Image";
    preview.appendChild(mainImage);
  }

  // ============= Thumbnail =============
  if (embed.thumbnail && embed.thumbnail.url) {
    const thumbnail = document.createElement("img");
    thumbnail.src = embed.thumbnail.url;
    thumbnail.alt = "Thumbnail";
    thumbnail.className = "thumbnail";
    preview.appendChild(thumbnail);
  }

  // ============= Footer =============
  if (embed.footer && (embed.footer.text || embed.footer.icon_url)) {
    const footerDiv = document.createElement("div");
    footerDiv.className = "footer";

    if (embed.footer.icon_url) {
      const footerIcon = document.createElement("img");
      footerIcon.src = embed.footer.icon_url;
      footerIcon.alt = "Footer Icon";
      footerDiv.appendChild(footerIcon);
    }

    if (embed.footer.text) {
      const footerText = document.createElement("span");
      footerText.textContent = embed.footer.text;
      footerDiv.appendChild(footerText);
    }

    preview.appendChild(footerDiv);
  }
}

function generateEmbed() {
  const embed = {
    color: selectedColorHex,
    title: document.getElementById("titleInput").value,
    author: {
      name: document.getElementById("authorNameInput").value,
      icon_url: document.getElementById("authorIconInput").value,
    },
    description: document.getElementById("descriptionInput").value,
    fields: getFields(),
    thumbnail: { url: document.getElementById("thumbnailInput").value },
    image: { url: document.getElementById("imageInput").value },
    footer: {
      text: document.getElementById("footerInput").value,
      icon_url: document.getElementById("footerIconInput").value,
    },
  };

  const output = document.getElementById("output");
  if (output) {
    output.textContent = JSON.stringify(embed, null, 2);
  } else {
    console.error("Output container not found!");
  }

  updatePreview(embed);
}

function resetInputs() {

    const inputs = document.querySelectorAll('input[type="text"], textarea, select');
    inputs.forEach(input => {
        input.value = '';
    });

    const checkboxes = document.querySelectorAll('input[type="checkbox"]');
    checkboxes.forEach(checkbox => {
        checkbox.checked = false;
    });

    const fieldsContainer = document.getElementById('fieldsContainer');
    if (fieldsContainer) {
        fieldsContainer.innerHTML = '<button onclick="removeFields()">Delete All Existing Fields</button>';
    }

    const selectedColor = document.getElementById('selectedColor');
    if (selectedColor) {
        selectedColor.innerHTML = '';
    }

    const preview = document.getElementById('preview');
    if (preview) {
        preview.innerHTML = '';
    }

    const output = document.getElementById('output');
    if (output) {
        output.innerHTML = '';
    }
}

function updateEmbedPreview() {
  const embed = {
    color: selectedColorHex,
    title: getTitle(),
    author: getAuthor(),
    description: getDescription(),
    fields: getFields(),
    thumbnail: getThumbnail(),
    image: getImage(),
    footer: getFooter(),
  };

  updatePreview(cleanEmbed(embed));
}

window.onload = function () {
  const saved = localStorage.getItem("lastEmbed");
  if (saved) {
    try {
      const parsed = JSON.parse(saved);

      if (parsed) {
        document.getElementById("titleInput").value = parsed.title || "";
        document.getElementById("authorNameInput").value =
          parsed.author?.name || "";
        document.getElementById("authorIconInput").value =
          parsed.author?.icon_url || "";
        document.getElementById("descriptionInput").value =
          parsed.description || "";
        document.getElementById("thumbnailInput").value =
          parsed.thumbnail?.url || "";
        document.getElementById("imageInput").value = parsed.image?.url || "";
        document.getElementById("footerInput").value =
          parsed.footer?.text || "";
        document.getElementById("footerIconInput").value = parsed.footer?.icon_url || "";

        if (parsed.fields) {
          parsed.fields.forEach((field) => addField(field.name, field.value));
        }

        if (parsed.color) {
          const selectedColorHex =
            "#" + parsed.color.toString(16).padStart(6, "0");

          const selectedColorDiv = document.getElementById("selectedColor");

          const colorBox = document.createElement("div");
          colorBox.style.width = "30px";
          colorBox.style.height = "30px";
          colorBox.style.backgroundColor = selectedColorHex;
          colorBox.style.border = "1px solid #ccc";
          colorBox.style.borderRadius = "5px";
          colorBox.style.display = "inline-block";
          colorBox.style.verticalAlign = "middle";

          selectedColorDiv.innerHTML = "";
          selectedColorDiv.appendChild(colorBox);
        }

        updatePreview(parsed);
      }
    } catch (e) {
      console.error("Error parsing saved embed data:", e);
    }
  } else {
    console.log("No saved embed data found.");
  }


  document
    .getElementById("titleInput")
    .addEventListener("input", updateEmbedPreview);
  document
    .getElementById("authorNameInput")
    .addEventListener("input", updateEmbedPreview);
  document
    .getElementById("authorIconInput")
    .addEventListener("input", updateEmbedPreview);
  document
    .getElementById("descriptionInput")
    .addEventListener("input", updateEmbedPreview);
  document
    .getElementById("thumbnailInput")
    .addEventListener("input", updateEmbedPreview);
  document
    .getElementById("imageInput")
    .addEventListener("input", updateEmbedPreview);
  document
    .getElementById("footerInput")
    .addEventListener("input", updateEmbedPreview);
};