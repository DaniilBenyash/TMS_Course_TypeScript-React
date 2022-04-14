// С ниже приведенным массивом решить следующие задачи. Все функции и данные должны быть протипизированы:
//
//     1. Создать строку из названий стран через запятую
//     2. Посчитать общее количнство людей в данном массиве стран.
//     3. Создать функцию, которая бы принимала массив стран и сортировала бы их по названию.
//     4. Получить массив валют.
//     5. Получить массив городов, отсортированных в алфавитном порядке.
//     6. Создать функцию, которая бы принимала массив стран и отдавала бы среднее количество людей в этих странах.

interface ICountries {
        country: string,
        abbreviation: string,
        city: string,
        currency_name: string,
        population: number
}

const countries: ICountries[] = [
    {
        country: "United Arab Emirates",
        abbreviation: "AE",
        city: "Abu Dhabi",
        currency_name: "Arab Emirates Dirham",
        population: 9630959

    },
    {
        country: "Poland",
        abbreviation: "PL",
        city: "Warszawa",
        currency_name: "Polish Zloty",
        population: 37974750
    },
    {
        country: "Russian Federation",
        abbreviation: "RU",
        city: "Moscow",
        currency_name: "Russian Ruble",
        population: 144478050
    }
]

// 1. //////////////////////////////////////////

function getString(arr: ICountries[]): string{

    let name_Countries = '';

    arr.forEach(el => name_Countries += el.country + ', ')

    return name_Countries.slice(0, name_Countries.length-2)
}

///////////////////////////////////////////////

// 2. /////////////////////////////////////////

function people(arr: ICountries[]): number{

    let allPeople: number = 0;

    arr.forEach(el => allPeople += el.population)

    return allPeople
}

////////////////////////////////////////

// 3. //////////////////////////////////

const arrCountry: string[] = [];            

countries.forEach(el => arrCountry.push(el.country))

const arrCountrySort = (arr: string[]): string[] =>  arr.sort()

////////////////////////////////////////

// 4. //////////////////////////////////

function getArrCurr(arr: ICountries[]): string[]{

    let curr: string[] = [];

    arr.forEach(el => curr.push(el.currency_name))

    return curr
}

/////////////////////////////////////////

// 5. ///////////////////////////////////

function getArrCitiesSort(arr: ICountries[]): string[]{

    let cities: string[] = [];

    arr.forEach(el => cities.push(el.city))

    return cities.sort()
}

//////////////////////////////////////////

// 6. ////////////////////////////////////

function getAveragePeopleFromCountries(arr: string[]): number{
    
    let averagePeople: number = 0;

    arr.forEach(el => averagePeople += countries.find(el2 => el2.country === el ).population)
    
    return averagePeople/arr.length
}

//////////////////////////////////////////

console.log(getString(countries));
console.log(people(countries));
console.log(arrCountrySort(arrCountry));
console.log(getArrCurr(countries));
console.log(getArrCitiesSort(countries));
console.log(getAveragePeopleFromCountries(arrCountry));