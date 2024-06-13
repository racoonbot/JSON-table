function hideAll() {
  toggleVisibility("action1");
  toggleVisibility("action2");
  toggleVisibility("action3");
  toggleVisibility("action4");
  toggleVisibility("action5");
  toggleVisibility("action6");
  toggleVisibility("lockList");
  toggleVisibility("unlockList");
  toggleVisibility("Insert_before_Primary");
}
function searchText() {
  const searchValue = document
    .getElementById("searchInput")
    .value.toLowerCase();
  const rows = document.querySelectorAll("#dataBody tr");

  rows.forEach((row) => {
    let found = false;
    row.childNodes.forEach((cell) => {
      if (cell.textContent.toLowerCase().includes(searchValue)) {
        found = true;
      }
    });

    if (found) {
      row.style.display = "table-row";
    } else {
      row.style.display = "none";
    }
  });

  // Handle the visibility and width of the table header separately
  const tableHeader = document.querySelector(".sticky-header");
  const visibleRows = document.querySelectorAll(
    "#dataBody tr[style='display: table-row;']"
  );
  if (visibleRows.length > 0) {
    tableHeader.style.display = "table-row";
    tableHeader.style.width = "100%";
  } else {
    tableHeader.style.display = "none";
  }
}

function toggleVisibility(actionClass) {
  const rows = document.getElementsByClassName(actionClass);
  for (let i = 0; i < rows.length; i++) {
    if (rows[i].style.display === "none") {
      rows[i].style.display = "table-row";
    } else {
      rows[i].style.display = "none";
    }
  }

  const button = document.querySelector(
    `button[onclick="toggleVisibility('${actionClass}')"]`
  );
  button.classList.toggle("active");
}

function handleFile() {
  const fileInput1 = document.getElementById("fileInput1");
  const file = fileInput1.files[0];

  const reader = new FileReader();
  reader.onload = function (e) {
    const jsonData = JSON.parse(e.target.result);
    const tableBody = document.getElementById("dataBody");
    tableBody.innerHTML = "";

    jsonData.forEach((event) => {
      const row = document.createElement("tr");
      const keys = [
        "Date",
        "Time",
        "Server",
        "List",
        "Action",
        "pl_Time",
        "pr_id",
        "WP",
        "title",
      ];

      keys.forEach((key) => {
        const cell = document.createElement("td");
        cell.textContent = event[key] || "";
        cell.setAttribute("data-key", key);
        cell.setAttribute("data-value", event[key] || "");

        switch (event.Action) {
          case "AppendList":
            cell.classList.add("action1");
            break;
          case "Toggle_hard_start":
            cell.classList.add("action2");
            break;
          case "Del_/_Cut_Primary":
            cell.classList.add("action3");
            break;
          case "Del_/_Cut_Secondary":
            cell.classList.add("action4");
            break;
          case "Copy_Primary":
            cell.classList.add("action5");
            break;
          case "Copy_Secondary":
            cell.classList.add("action6");
            break;
          case "Lock_List":
            cell.classList.add("lockList");
            break;
          case "Unlock_List":
            cell.classList.add("unlockList");
            break;
          case "Insert_before_Primary":
            cell.classList.add("Insert_before_Primary");
            break;
          default:
            break;
        }

        row.appendChild(cell);
      });

      tableBody.appendChild(row);
    });
  };

  reader.readAsText(file);
}
