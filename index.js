//С ниже приведенным объектом решить следующие задачи:

// 1. Создать строку из названий предметов написаных через запятую
// 2. Посчитать общее количество студентов и учителей на всех предметах
// 3. Получить среднее количество студентов на всех предметах
// 4. Создать массив из объектов предметов
// 5. Получить массив из предметов и отсортировать по количеству преподавателей на факультете от большего к меньшему
// 6. Есть массив из нескольких массивов с числами
//    Написать функцию, которая будет возвращать сумму всех чисел во всех массивах
//    Пример сумма [[1,2], [3,2], [5, 6, 2], [4]] должна вернуть 25

const subjects = {
    mathematics: {
        students: 200,
        teachers: 6
    },
    biology: {
        students: 120,
        teachers: 6
    },
    geography: {
        students: 60,
        teachers: 2
    },
    chemistry: {
        students: 100,
        teachers: 3
    }
}

const matrix = [[1,2], [3,2], [5, 6, 2], [4]]

// 1.
function one(obj){
    return Object.keys(obj).join(', ')
}

// 2.
function two(obj){
    let resultTwo = {
        students: 0,
        teachers: 0
    };
    Object.values(obj).forEach(el => {
        resultTwo.students += el.students
        resultTwo.teachers += el.teachers
    })
    return resultTwo
}

// 3.
function three(obj){
    return Object.values(obj).reduce((acc,el) => {
        return acc + el.students/Object.values(obj).length
    }, 0)
}

// 4.
function four(obj){
    return Object.keys(obj).map(key =>{
        return key = {key}
    })
}

// 5.
function five(obj){
    return Object.keys(obj).sort((a,b) => obj[b].teachers - obj[a].teachers)
}

// 6.
function six(arr){
    return arr.flat(1).reduce((acc, el) => {
        return acc + el
    })
}

console.log(one(subjects));
console.log(two(subjects));
console.log(three(subjects));
console.log(four(subjects));
console.log(five(subjects));
console.log(six(matrix));