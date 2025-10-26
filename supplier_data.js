const gnfs_1 = data.filter((item) =>
  [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12, 11, 13, 205, 44, 45, 46, 47, 20, 48, 49,
    50, 161, 51, 52, 22, 53, 29, 54, 55, 99, 98, 57, 56,
  ].includes(item.id)
);

const gnfs_2 = data.filter((item) =>
  [100, 103, 102, 101, 95, 17, 96, 97].includes(item.id)
);

const gnfs_3 = data.filter((item) =>
  [
    31, 59, 60, 61, 30, 204, 36, 63, 33, 64, 65, 66, 67, 68, 69, 62, 21, 70, 71,
    34, 72, 73, 75, 76, 74,
  ].includes(item.id)
);

const gnfs_4 = data.filter((item) =>
  [
    37, 77, 42, 35, 38, 39, 40, 41, 58, 78, 79, 80, 81, 82, 83, 43, 84, 85, 86,
    87, 88, 90, 93, 91, 92, 89, 94, 18, 32,
  ].includes(item.id)
);

const gnfs_5 = data.filter((item) =>
  [165, 166, 167, 168, 169, 170, 171, 172, 173, 174, 175, 176, 177].includes(
    item.id
  )
);

const gnfs_6 = data.filter((item) =>
  [178, 179, 180, 181, 182, 183, 184, 185, 186].includes(item.id)
);

const well_1 = data.filter((item) =>
  [
    187, 188, 189, 190, 191, 192, 193, 194, 195, 196, 114, 115, 116, 117, 118,
  ].includes(item.id)
);

const well_2 = data.filter((item) =>
  [
    119, 120, 121, 122, 123, 124, 128, 125, 126, 127, 129, 130, 131, 132, 133,
    134, 135, 136, 137, 138, 139, 140,
  ].includes(item.id)
);

const noori = data.filter((item) => [150, 151].includes(item.id));
const sunin = data.filter((item) =>
  [141, 142, 143, 144, 145, 146, 147, 148, 149, 197].includes(item.id)
);
const hosu = data.filter((item) => [155, 156, 157, 158].includes(item.id));
const boram = data.filter((item) => [164].includes(item.id));
const alice = data.filter((item) => [161, 162, 163].includes(item.id));
const mirstar = data.filter((item) => [159, 160].includes(item.id));
const marubishi = data.filter((item) => [152, 153, 154].includes(item.id));
const cannele = data.filter((item) => [199].includes(item.id));
const eggtart = data.filter((item) => [200].includes(item.id));

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