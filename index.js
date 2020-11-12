class Apriori {
  constructor(items) {
    this.items = items;
    this.total = items.length;
  }

  getOneItemSet = () => {
    let item = [];
    this.items.forEach((e) => {
      e.forEach((el) => item.push(el));
    });

    let anotherItem = [...item];
    let totalItem = [];
    item.forEach((e) => {
      let total = 0;
      anotherItem.forEach((el) => {
        if (e === el) {
          total += 1;
          item.splice(
            item.findIndex((elem) => elem === e),
            1
          );
        }
      });
      totalItem.push({ item: e, total });
    });
    return totalItem;
  };

  getTwoItemSet = () => {
    const row = [];
    this.getOneItemSet().forEach((e) => {
      this.getOneItemSet().forEach((el) => {
        let total = 0;
        let totalA = 0;
        this.items.forEach((elem) => {
          if (
            elem.some((i) => i === e.item) &&
            elem.some((i) => i === el.item)
          ) {
            total += 1;
          }
          if (elem.some((i) => i === e.item)) {
            totalA += 1;
          }
        });
        if (e.item !== el.item) {
          row.push({
            title: `${e.item} => ${el.item}`,
            support: total / this.items.length,
            confidence: total / totalA,
          });
        }
      });
    });
    return row;
  };
}

const orders = [
  [1, 4, 2, 5, 8],
  [2, 9],
  [9, 1, 3, 2],
  [4, 7, 0, 1, 2],
  [2, 6, 7, 3],
  [9, 3, 2],
  [2, 1, 8, 4, 2],
  [0, 4, 1, 9, 15, 2],
  [3, 6, 2, 8, 1],
  [2, 7, 3, 0],
];

const apriori = new Apriori(orders);

console.log(apriori.getOneItemSet());
// [
//   { item: 1, total: 6 },
//   { item: 2, total: 11 },
//   { item: 8, total: 3 },
//   { item: 9, total: 4 },
//   { item: 7, total: 3 },
//   { item: 6, total: 2 },
//   { item: 3, total: 5 },
//   { item: 15, total: 1 },
// ];

console.log(apriori.getTwoItemSet());
// [
//   { title: "1 => 2", support: 0.6, confidence: 1 },
//   { title: "1 => 8", support: 0.3, confidence: 0.5 },
//   { title: "1 => 9", support: 0.2, confidence: 0.3333333333333333 },
//   { title: "1 => 7", support: 0.1, confidence: 0.16666666666666666 },
//   { title: "1 => 6", support: 0.1, confidence: 0.16666666666666666 },
//   { title: "1 => 3", support: 0.2, confidence: 0.3333333333333333 },
//   { title: "1 => 15", support: 0.1, confidence: 0.16666666666666666 },
//   { title: "2 => 1", support: 0.6, confidence: 0.6 },
//   { title: "2 => 8", support: 0.3, confidence: 0.3 },
//   { title: "2 => 9", support: 0.4, confidence: 0.4 },
//   { title: "2 => 7", support: 0.3, confidence: 0.3 },
//   { title: "2 => 6", support: 0.2, confidence: 0.2 },
//   { title: "2 => 3", support: 0.5, confidence: 0.5 },
//   { title: "2 => 15", support: 0.1, confidence: 0.1 },
//   { title: "8 => 1", support: 0.3, confidence: 1 },
//   { title: "8 => 2", support: 0.3, confidence: 1 },
//   { title: "8 => 9", support: 0, confidence: 0 },
//   { title: "8 => 7", support: 0, confidence: 0 },
//   { title: "8 => 6", support: 0.1, confidence: 0.3333333333333333 },
//   { title: "8 => 3", support: 0.1, confidence: 0.3333333333333333 },
//   { title: "8 => 15", support: 0, confidence: 0 },
//   { title: "9 => 1", support: 0.2, confidence: 0.5 },
//   { title: "9 => 2", support: 0.4, confidence: 1 },
//   { title: "9 => 8", support: 0, confidence: 0 },
//   { title: "9 => 7", support: 0, confidence: 0 },
//   { title: "9 => 6", support: 0, confidence: 0 },
//   { title: "9 => 3", support: 0.2, confidence: 0.5 },
//   { title: "9 => 15", support: 0.1, confidence: 0.25 },
//   { title: "7 => 1", support: 0.1, confidence: 0.3333333333333333 },
//   { title: "7 => 2", support: 0.3, confidence: 1 },
//   { title: "7 => 8", support: 0, confidence: 0 },
//   { title: "7 => 9", support: 0, confidence: 0 },
//   { title: "7 => 6", support: 0.1, confidence: 0.3333333333333333 },
//   { title: "7 => 3", support: 0.2, confidence: 0.6666666666666666 },
//   { title: "7 => 15", support: 0, confidence: 0 },
//   { title: "6 => 1", support: 0.1, confidence: 0.5 },
//   { title: "6 => 2", support: 0.2, confidence: 1 },
//   { title: "6 => 8", support: 0.1, confidence: 0.5 },
//   { title: "6 => 9", support: 0, confidence: 0 },
//   { title: "6 => 7", support: 0.1, confidence: 0.5 },
//   { title: "6 => 3", support: 0.2, confidence: 1 },
//   { title: "6 => 15", support: 0, confidence: 0 },
//   { title: "3 => 1", support: 0.2, confidence: 0.4 },
//   { title: "3 => 2", support: 0.5, confidence: 1 },
//   { title: "3 => 8", support: 0.1, confidence: 0.2 },
//   { title: "3 => 9", support: 0.2, confidence: 0.4 },
//   { title: "3 => 7", support: 0.2, confidence: 0.4 },
//   { title: "3 => 6", support: 0.2, confidence: 0.4 },
//   { title: "3 => 15", support: 0, confidence: 0 },
//   { title: "15 => 1", support: 0.1, confidence: 1 },
//   { title: "15 => 2", support: 0.1, confidence: 1 },
//   { title: "15 => 8", support: 0, confidence: 0 },
//   { title: "15 => 9", support: 0.1, confidence: 1 },
//   { title: "15 => 7", support: 0, confidence: 0 },
//   { title: "15 => 6", support: 0, confidence: 0 },
//   { title: "15 => 3", support: 0, confidence: 0 },
// ];
