# Red Notice

A Chrome extension that helps users create a safer browsing experience by filtering sensitive or offensive content based on their personal preferences.

> Built using JavaScript and Chrome Extension Manifest V3.

---

## Overview

Red Notice is a browser extension designed to reduce exposure to unwanted content while browsing the web. Users can choose the categories of content they wish to avoid, and the extension automatically detects and hides matching text on supported webpages.

The goal is to provide a more personalized, comfortable, and inclusive browsing experience.

---

## Features

- Filter sensitive text while browsing
- User-configurable content preferences
- Hide offensive content dynamically
- Persistent settings using Chrome Storage API
- Lightweight and fast
- Built with Chrome Extension Manifest V3

---

## How It Works

```text
User selects categories
          │
          ▼
 Preferences stored in Chrome Storage
          │
          ▼
 User visits a webpage
          │
          ▼
 Extension scans page content
          │
          ▼
 Matching sensitive text detected
          │
          ▼
 Content is hidden or replaced
```

---

## Project Structure

```
Red-Notice/

├── icons/
│   ├── Cancel_16x16.png
│   ├── Cancel_32x32.png
│   ├── Cancel_48x48.png
│   └── Cancel_128x128.png
│
├── background.js
├── popup.html
├── popup.js
├── popup.css
├── options.html
├── options.js
├── options.css
├── styles.css
├── manifest.json
└── README.md
```

---

## Technologies Used

- JavaScript (ES6)
- HTML5
- CSS3
- Chrome Extensions API
- Chrome Storage API
- Manifest V3

---

## Installation

### Clone the repository

```bash
git clone https://github.com/shriasannuthi/red-notice.git
```

### Load the extension

1. Open Google Chrome.
2. Navigate to `chrome://extensions`.
3. Enable **Developer Mode**.
4. Click **Load unpacked**.
5. Select the project folder.

The extension will now be available in your browser.

---

## Configuration

Open the extension's **Options** page and select the categories you would like to filter.

Current supported categories include:

- Homophobic content
- Racist content
- Sexist content
- Offensive language

Your preferences are stored locally using Chrome Storage.

---

## Example Workflow

1. Install the extension.
2. Choose the content categories to filter.
3. Browse websites normally.
4. Matching text is automatically filtered based on your preferences.

---

## Learning Outcomes

This project demonstrates:

- Chrome Extension development
- Manifest V3 architecture
- Background service workers
- DOM manipulation
- Browser storage APIs
- Event-driven JavaScript
- User preference management

---

## Future Improvements

- AI-powered toxicity detection
- Context-aware filtering using NLP
- Support for multiple languages
- Filtering statistics dashboard
- Adjustable filtering sensitivity
- Custom keyword lists
- Cloud synchronization
- Microsoft Edge and Firefox support

---

## License

This project is licensed under the MIT License.

---

## 👩‍💻 Author

**Shria Sannuthi**

Software Engineer • Full Stack Developer • Generative AI Enthusiast
