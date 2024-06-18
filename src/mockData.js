// src/mockData.js

const mockData = {
  "/": [
    { name: "Documents", type: "folder", path: "/Documents" },
    { name: "Downloads", type: "folder", path: "/Downloads" },
    { name: "Pictures", type: "folder", path: "/Pictures" },
    { name: "Music", type: "folder", path: "/Music" },
    { name: "File 1.txt", type: "file", path: "/File 1.txt" },
    { name: "File 2.txt", type: "file", path: "/File 2.txt" },
  ],
  "/Documents": [
    { name: "Resume.docx", type: "file", path: "/Documents/Resume.docx" },
    { name: "Project", type: "folder", path: "/Documents/Project" },
  ],
  "/Downloads": [
    { name: "Installer.exe", type: "file", path: "/Downloads/Installer.exe" },
    { name: "Update.zip", type: "file", path: "/Downloads/Update.zip" },
  ],
  "/Pictures": [
    { name: "Vacation", type: "folder", path: "/Pictures/Vacation" },
    { name: "Family.jpg", type: "file", path: "/Pictures/Family.jpg" },
  ],
  "/Music": [
    { name: "Song1.mp3", type: "file", path: "/Music/Song1.mp3" },
    { name: "Song2.mp3", type: "file", path: "/Music/Song2.mp3" },
  ],
  "/Documents/Project": [
    { name: "Presentation.pptx", type: "file", path: "/Documents/Project/Presentation.pptx" },
  ],
  "/Pictures/Vacation": [
    { name: "Beach.png", type: "file", path: "/Pictures/Vacation/Beach.png" },
  ],
};

export default mockData;
