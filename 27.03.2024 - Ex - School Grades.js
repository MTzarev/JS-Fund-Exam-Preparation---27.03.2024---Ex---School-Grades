function schoolGrades(input) {
    let object = {};

    for (let student of input) {
        let [name, ...grades] = student.split(' ');
        let qty = grades.length;
        let totalGrades = grades.reduce((a, b) => a + Number(b), 0);
        if (object.hasOwnProperty(name)) {
            
            object[name].total += totalGrades;
            object[name].qty += qty;
        } else {
           
            object[name] = { total: totalGrades, qty: qty };
        }
    }

    
    for (let name in object) {
        let averageGrade = object[name].total / object[name].qty;
        console.log(`${name}: ${averageGrade.toFixed(2)}`);
    }
}
schoolGrades(['Lilly 4 6 6 5',
'Tim 5 6',
'Tammy 2 4 3',
'Tim 6 6']
);