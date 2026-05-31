function woodCal(table, chair, bookshelf){
    const woodBarForTable= 4;
    const woodBarForChair= 7;
    const woodBarForBookshelf= 5;

    let totalWoodForTable=woodBarForTable*table;
    let totalWoodForChair=woodBarForChair*chair;
    let totalWoodForBookshelf=woodBarForBookshelf*bookshelf;

    let sumOfAllWood = totalWoodForTable+totalWoodForChair+totalWoodForBookshelf;

    return sumOfAllWood;
}
const result=woodCal(3,6,2);
console.log(result);