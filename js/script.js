function addToList(place) {
    const travelList = document.getElementById("travel-list");
    const items = travelList.querySelectorAll("li");

    for (let item of items) {
        if (item.dataset.place === place) {
            alert("This place is already in your list!");
            return;
        }
    }

    const newItem = document.createElement("li");
    newItem.dataset.place = place;

    const placeName = document.createElement("span");
    placeName.textContent = place;

    const removeButton = document.createElement("button");
    removeButton.textContent = "Remove";

    removeButton.onclick = function () {
        newItem.remove();
    };

    newItem.appendChild(placeName);
    newItem.appendChild(removeButton);
    travelList.appendChild(newItem);
}