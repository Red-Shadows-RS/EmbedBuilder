# 🚀 EmbedMaker
A tool that lets you create your own Discord-style embeds in an easy and interactive way.

## ✨ Features
- 📝 **Title**, 🖋️ **Author**, 📖 **Description**, 🏷️ **Fields**, 🖼️ **Thumbnail**, 🌄 **Image**, 🦶 **Footer**, 🎨 **Color Picker** support  
- 👀 **Live Preview**: See your embed rendered as you type  
- 🗒️ **JSON Output**: Generate the raw embed JSON for copy-pasting into your bot code  
- 🔄 **Reset**: Clear all inputs with one click  
- 📋 **Copy to Clipboard**: Quickly copy the generated JSON  

## 🛠️ Installation
1. 📂 Clone or download this repository.  
2. 📂 Ensure you have the following files in the same directory:  
   - `EmbedMaker.html`  
   - `style/style.css`  
   - `utils/embedBuilder.js`  
   - `utils/colorManager.js`  
   - `utils/copyManager.js`  
3. 🌐 Open **`EmbedMaker.html`** in your browser.  

## 🧩 Usage
1. 📝 Fill in the inputs on the left panel:  
   - **Title**, **Author Name**, **Author Icon URL**  
   - **Description**, **Fields** (title, value, inline)  
   - **Thumbnail URL**, **Image URL**, **Footer Text**, **Footer Icon URL**  
2. 🎨 Click **“Change Color”** to pick a sidebar color  
3. 🚀 Click **Generate** to build the embed JSON.  
4. 👁️ Preview appears live on the right panel.  
5. 📋 Use **Copy** button beside the JSON to copy it to your clipboard.  
6. 🔄 Click **Reset** to clear all inputs and start fresh.  

## 🐞 Troubleshooting
- ⚙️ **Preview Not Updating**: Ensure all input event listeners are attached (e.g., `footerIconInput`).  
- ⚙️ **Incorrect JSON**: Check that required fields (e.g., `title` or `description`) are not empty.  
- ⚙️ **Clipboard Copy Fails**: Verify your browser supports the `navigator.clipboard` API and the page is served over HTTPS.  

## 💡 Issues & Suggestions
If you encounter a bug or have a feature request, please:  
1. 🐛 Open an issue in the GitHub repository.  
2. 📝 Provide a clear title and description of the problem or suggestion.  
3. 📸 Include screenshots, console errors, and steps to reproduce if applicable.  
4. 🤝 Contributions are welcome—feel free to submit a pull request with improvements!  

---

🌟 This project is part of **Red Shadows | RS Project**🌟
