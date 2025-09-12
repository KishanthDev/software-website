// Select container
const container = document.getElementById("expertise-container");

// Fetch JSON file
fetch('expertise.json')
  .then(response => response.json())
  .then(areaOfExpertise => {
    areaOfExpertise.forEach(block => {
      const blockDiv = document.createElement("div");
      blockDiv.className = "expertise-block";

      const title = document.createElement("h5");
      title.className = "block-title";
      title.textContent = block.displayName;
      blockDiv.appendChild(title);

      const logoGrid = document.createElement("div");
      logoGrid.className = "logo-grid";

      block.list.forEach(item => {
        const logoItem = document.createElement("div");
        logoItem.className = "logo-item";

        const img = document.createElement("img");
        img.src = item.imageUrl;
        img.alt = item.name;

        logoItem.appendChild(img);
        logoGrid.appendChild(logoItem);
      });

      blockDiv.appendChild(logoGrid);
      container.appendChild(blockDiv);
    });
  })
  .catch(error => console.error("Error loading expertise JSON:", error));
