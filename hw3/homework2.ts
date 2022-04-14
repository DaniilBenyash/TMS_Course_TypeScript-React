// С ниже приведенным массивом решить следующие задачи.
// Все функции и данные должны быть протипизированы:

// 1. Создать строку из имен пользователей через запятую
// 2. Посчитать общее количнство машин у пользователей
// 3. Создать функцию, которая бы принимала массив пользователей и отфильтровывала
// пользователей на наличие образования
// 4. Создать функцию, которая бы принимала массив пользователей и отфильтровывала
// пользователей на наличие животных
// 5. Создать функцию, которая бы принимала массив пользователей и отдавала бы  строку с
// названиями марок автомобилей через запятую

interface IUsers {
    name: string,
    phone: string,
    email: string,
    animals?: string[],
    cars?: string[],
    hasChildren: boolean,
    hasEducation: boolean,

}

const users: IUsers[] = [
    {
        name: "Harry Felton",
        phone: "(09) 897 33 33",
        email: "felton@gmail.com",
        animals: ["cat"],
        cars: ["bmw"],
        hasChildren: false,
        hasEducation: true

    },
    {
        name: "May Sender",
        phone: "(09) 117 33 33",
        email: "sender22@gmail.com",
        hasChildren: true,
        hasEducation: true
    },
    {
        name: "Henry Ford",
        phone: "(09) 999 93 23",
        email: "ford0@gmail.com",
        cars: ["bmw", "audi"],
        hasChildren: true,
        hasEducation: false
    }
]

// 1. ///////////////////////////////////

const getStingNames = (arr: IUsers[]): string => arr.map(el => el.name).join(', ')

/////////////////////////////////////////

// 2. ///////////////////////////////////

const getAllCars = (arr: IUsers[]): number => {

    let cars: number = 0;

    arr.forEach(el => {
        if(el.cars)cars += el.cars.length
    })

    return cars
}

/////////////////////////////////////////

// 3. ///////////////////////////////////

const sortUsersByEducation = (arr: IUsers[]): IUsers[] => {

    return arr.sort((el) => {

        if(el.hasEducation === true) return -1

        return 1
    })
}

/////////////////////////////////////////

// 4. ///////////////////////////////////

const sortUsersByAnimals = (arr: IUsers[]): IUsers[] => {

    return arr.sort((el) => {

        if(el.animals) return -1

        return 1
    })
}

/////////////////////////////////////////

// 4. ///////////////////////////////////

const getStringNameCars = (arr: IUsers[]): string => {

    return arr.map(el => {

        if(el.cars) return el.cars.join(', ')

    }).filter(Boolean).join(', ')
} 

/////////////////////////////////////////

console.log(getStingNames(users));
console.log(getAllCars(users));
console.log(sortUsersByEducation(users));
console.log(sortUsersByAnimals(users));
console.log(getStringNameCars(users));