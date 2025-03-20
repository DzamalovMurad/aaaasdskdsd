document.addEventListener("DOMContentLoaded", () => {
    const hobbyNameInput = document.getElementById("hobby-name");
    const hobbyDescriptionInput = document.getElementById("hobby-description");
    const addHobbyBtn = document.getElementById("add-hobby");
    const hobbiesContainer = document.getElementById("hobbies-container");
    const hobbyTemplate = document.getElementById("hobby-template");
  
    function addHobby() {
      const name = hobbyNameInput.value.trim();
      const description = hobbyDescriptionInput.value.trim();
  
      if (name === "") {
        alert("Введите название хобби!");
        return;
      }
  
      const hobbyCard = hobbyTemplate.content.cloneNode(true);
      const cardTitle = hobbyCard.querySelector(".card-title");
      const cardDescription = hobbyCard.querySelector(".card-description");
      const likeBtn = hobbyCard.querySelector(".button-like");
      const deleteBtn = hobbyCard.querySelector(".button-delete");
  
      cardTitle.textContent = name;
      cardDescription.textContent = description;
  
      likeBtn.addEventListener("click", function() {
        this.classList.toggle("active");
        this.closest(".card").classList.toggle("liked");
      });
      
      deleteBtn.addEventListener("click", () => {
        deleteBtn.closest(".card").remove();
      });
  
      hobbiesContainer.appendChild(hobbyCard);
  
      hobbyNameInput.value = "";
      hobbyDescriptionInput.value = "";
    }
  
    addHobbyBtn.addEventListener("click", addHobby);
  });
  