// By nightcoreat

let selectedColorHex = "#5865F2";

function openColorPicker(event) {
  event.stopPropagation();

  if (document.getElementById("colorPickerContainer")) {
    return;
  }

  const colorPickerContainer = document.createElement("div");
  colorPickerContainer.id = "colorPickerContainer";
  colorPickerContainer.style.position = "fixed";
  colorPickerContainer.style.top = "50%";
  colorPickerContainer.style.left = "50%";
  colorPickerContainer.style.transform = "translate(-50%, -50%)";
  colorPickerContainer.style.backgroundColor = "#fff";
  colorPickerContainer.style.padding = "20px";
  colorPickerContainer.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.1)";
  colorPickerContainer.style.borderRadius = "8px";
  colorPickerContainer.style.zIndex = "9999";

  const colorInput = document.createElement("input");
  colorInput.type = "color";
  colorInput.id = "colorInput";
  colorInput.value = selectedColorHex;

  const selectedColorText = document.createElement("p");
  selectedColorText.id = "selectedColorText";
  selectedColorText.innerText = `Pick New Color`;
  selectedColorText.style.color = selectedColorHex;

  colorInput.addEventListener("input", function () {
    selectedColorHex = colorInput.value;
    selectedColorText.innerText = `Here's how looks your new color`;
    selectedColorText.style.color = selectedColorHex;

    const selectedColorElement = document.getElementById("selectedColor");
    if (selectedColorElement) {
      selectedColorElement.innerHTML = "";

      const colorBox = document.createElement("div");
      colorBox.style.width = "30px";
      colorBox.style.height = "30px";
      colorBox.style.backgroundColor = selectedColorHex;
      colorBox.style.border = "1px solid #{selectedColorHex}";
      colorBox.style.borderRadius = "5px";

      selectedColorElement.appendChild(colorBox);
    }
  });

  colorPickerContainer.appendChild(colorInput);
  colorPickerContainer.appendChild(selectedColorText);
  document.body.appendChild(colorPickerContainer);

  setTimeout(() => {
    document.addEventListener("click", function closePicker(e) {
      if (
        !colorPickerContainer.contains(e.target) &&
        e.target.id !== "openColorPickerBtn"
      ) {
        colorPickerContainer.remove();
        document.removeEventListener("click", closePicker);
      }
    });
  }, 100);
}

document.addEventListener("DOMContentLoaded", () => {
  const openBtn = document.getElementById("openColorPickerBtn");
  if (openBtn) {
    openBtn.addEventListener("click", openColorPicker);
  }
});