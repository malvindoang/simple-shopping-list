var itemInput = document.getElementById("itemInput");
var addBtn = document.getElementById("addBtn");
var itemTableBody = document.getElementById("itemTableBody");
var emptyMessage = document.getElementById("emptyMessage");

function updateEmptyMessage() {
  if (itemTableBody.children.length === 0) {
    emptyMessage.style.display = "block";
  } else {
    emptyMessage.style.display = "none";
  }
}

function addItem() {
  var itemName = itemInput.value.trim();

  if (itemName === "") {
    alert("Nama item tidak boleh kosong!");
    return;
  }

  var newRow = document.createElement("tr");

  var noCell = document.createElement("td");
  noCell.textContent = itemTableBody.children.length + 1;

  var nameCell = document.createElement("td");
  nameCell.textContent = itemName;

  var actionCell = document.createElement("td");
  var deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Delete";
  deleteBtn.className = "deleteBtn";

  deleteBtn.addEventListener("click", function () {
    newRow.remove();
    renumberRows();
    updateEmptyMessage();
  });

  actionCell.appendChild(deleteBtn);

  newRow.appendChild(noCell);
  newRow.appendChild(nameCell);
  newRow.appendChild(actionCell);

  itemTableBody.appendChild(newRow);

  itemInput.value = "";
  itemInput.focus();

  updateEmptyMessage();
}

function renumberRows() {
  var rows = itemTableBody.querySelectorAll("tr");
  for (var i = 0; i < rows.length; i++) {
    rows[i].children[0].textContent = i + 1;
  }
}

addBtn.addEventListener("click", addItem);

itemInput.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    addItem();
  }
});

updateEmptyMessage();
