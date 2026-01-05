function makeSupplierData(row_data, items) {
  return items
    .map((id) => row_data.find((item) => item.id === id))
    .filter(Boolean);
}

const gnfs = makeSupplierData(data, []);

const well = makeSupplierData(data, []);

const gnfs_well = makeSupplierData(
  data,
  [
    56, 95, 99, 98, 107, 78, 106, 62, 120, 119, 21, 84, 135, 134, 132, 131, 130,
    136, 128, 133, 70, 140, 79, 115, 11, 7, 5, 6, 13, 8, 4, 15, 137, 96, 116,
    44, 45, 129, 121, 139, 71, 64, 63, 125, 17, 35, 36, 104, 105, 19, 138, 28,
    59, 9, 126, 122, 80, 31, 82, 81, 60, 61, 43, 69, 55, 117, 49, 86, 88, 87,
    206, 65, 93, 68, 92, 90, 91, 76, 66, 67, 42, 94, 33, 40, 37, 38, 18, 39, 41,
    34, 204, 89, 114, 77, 108, 26, 25, 207, 208, 209, 210, 23, 24, 97, 20, 46,
    127, 74, 73, 83, 50, 205, 72, 75, 48, 10, 85, 47, 53, 22, 52, 54, 211, 1, 2,
    3, 12, 118, 16, 32, 124, 123, 14, 100, 103, 102, 101, 57, 58, 187, 188, 189,
    198, 177, 173, 172, 192, 190, 191, 175, 170, 169, 168, 167, 166, 171, 176,
    174, 165, 179, 181, 180, 178, 182, 193, 194, 195, 196, 176, 183, 184, 185,
    186,
  ]
);

const noori = makeSupplierData(data, [150, 151]);

const sunin = makeSupplierData(
  data,
  [141, 142, 143, 144, 145, 146, 147, 148, 149, 197]
);

const hosu = makeSupplierData(data, [155, 156, 157, 158]);

const boram = makeSupplierData(data, [164]);

const alice = makeSupplierData(data, [161, 162, 163]);

const mirstar = makeSupplierData(data, [159, 160]);

const marubishi = makeSupplierData(data, [152, 153, 154]);

const cannele = makeSupplierData(data, [199]);

const eggtart = makeSupplierData(data, [200]);

function renderTableRows(dataArray, tbodyElement) {
  dataArray.forEach((item) => {
    const tr = document.createElement("tr");

    tr.innerHTML = `
        <td>${item.id}</td>
        <td>${item.item_name}</td>
        <td>${item.order_rule}</td>
        <td>${item.location}</td>
      `;

    tr.dataset.name = item.item_name;
    tr.dataset.supplier = item.supplier;

    attachLongPress(tr, item, (i) => {
      const input = prompt(`${i.item_name} 수량을 입력하세요:`);

      if (input === null) return;

      appendToTodaysOrderList(i, input);
    });

    tbodyElement.appendChild(tr);
  });
}

function attachLongPress(element, item, callback) {
  let pressTimer = null;
  let isLongPress = false;

  const start = () => {
    isLongPress = false;

    pressTimer = setTimeout(() => {
      isLongPress = true;
      callback(item);
    }, 600);
  };

  const end = () => {
    clearTimeout(pressTimer);
  };

  element.addEventListener("mousedown", start);
  element.addEventListener("touchstart", start);

  element.addEventListener("mouseup", end);
  element.addEventListener("mouseleave", end);
  element.addEventListener("touchend", end);
}

function appendToTodaysOrderList(item, number) {
  const tr = document.createElement("tr");
  tr.innerHTML = `
    <td>${item.item_name}</td>
    <td>${number}</td>
    <td>${item.supplier}</td>
  `;
  document.querySelector("#todaysOrderList tbody").append(tr);
}

function copyTodaysOrderListToClipboard() {
  const rows = document.querySelectorAll("#todaysOrderList tbody tr");
  const grouped = {};

  rows.forEach((tr) => {
    const name = tr.children[0].textContent.trim();
    const quantity = tr.children[1].textContent.trim();
    const supplier = tr.children[2].textContent.trim();

    if (!grouped[supplier]) grouped[supplier] = [];
    grouped[supplier].push({ name, quantity });
  });

  let result = "";

  Object.keys(grouped).forEach((supplier) => {
    result += `[${supplier}]\n`;

    grouped[supplier].forEach((item) => {
      result += `${item.name} ${item.quantity}\n`;
    });

    result += `\n`;
  });

  navigator.clipboard.writeText(result);
  showToast();
}

function showToast() {
  const toast = document.getElementById("toast");
  toast.classList.add("show");

  setTimeout(() => {
    toast.classList.remove("show");
  }, 1200);
}
