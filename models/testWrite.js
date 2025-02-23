const fs = require('fs');
const path = require('path');

// Test file path
const filePath = path.join(__dirname, 'data', 'test.json');
console.log("Test file path:", filePath);

fs.writeFile(filePath, '{"test": "data"}', (err) => {
  if (err) {
    console.error("Error writing test file:", err);
  } else {
    console.log("Test file created successfully!");
  }
});
