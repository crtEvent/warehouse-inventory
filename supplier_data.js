function makeSupplierData(row_data, items) {
  return items
    .map((id) => row_data.find((item) => item.id === id))
    .filter(Boolean);
}

const gnfs_1 = makeSupplierData(
  data,
  [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12, 11, 13, 205, 44, 45, 46, 47, 20, 48, 49,
    50, 161, 51, 52, 22, 53, 29, 54, 55, 99, 98, 57, 56,
  ]
);

const gnfs_2 = makeSupplierData(data, [100, 103, 102, 101, 95, 17, 96, 97]);

const gnfs_3 = makeSupplierData(
  data,
  [
    31, 59, 60, 61, 30, 204, 36, 63, 33, 64, 65, 66, 67, 68, 69, 62, 21, 70, 71,
    34, 72, 73, 75, 76, 74,
  ]
);

const gnfs_4 = makeSupplierData(
  data,
  [
    37, 77, 42, 35, 38, 39, 40, 41, 58, 78, 79, 80, 81, 82, 83, 43, 84, 85, 86,
    87, 88, 90, 93, 91, 92, 89, 94, 18, 32,
  ]
);

const gnfs_5 = makeSupplierData(
  data,
  [165, 166, 167, 168, 169, 170, 171, 172, 173, 174, 175, 176, 177]
);

const gnfs_6 = makeSupplierData(
  data,
  [178, 179, 180, 181, 182, 183, 184, 185, 186]
);

const well_1 = makeSupplierData(
  data,
  [187, 188, 189, 190, 191, 192, 193, 194, 195, 196, 114, 115, 116, 117, 118]
);

const well_2 = makeSupplierData(
  data,
  [
    119, 120, 121, 122, 123, 124, 128, 125, 126, 127, 129, 130, 131, 132, 133,
    134, 135, 136, 137, 138, 139, 140,
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
        <td>${item.min_order_quantity}</td>
        <td>${item.order_rule}</td>
        <td>${item.location}</td>
      `;

    tbodyElement.appendChild(tr);
  });
}
