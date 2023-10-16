let today = 'friday'

const person = {
    name: "leon",
    age: 32,
    favMovies: [
        "lotr - the fellowship of the ring",
        "lotr - two towers",
        "tron"
    ],
    favDay: 'friday',
    isItAGoodDay(){
        if(this.favDay === today){
            return 'its a great day'
        } else {
            return 'it will be friday faster than you think'
        }
    }
}

console.log(person.isItAGoodDay())

// dot notation
console.log(person.name)
// bracket notation objects
// console.log(person['name'])

// console.log(person.favMovies)
// person.favMovies.push('lotr- return of the king')
// console.log(person.favMovies)

// const alarm = {
//     weekendAlarm: 'no alarm needed',
//     weekdayAlarm: 'get up at 7am'
// }

// let day = 'monday'

// if(day === 'saturday' || day === 'sunday'){
//     console.log(alarm.weekendAlarm)
// }else{
//     console.log(alarm.weekdayAlarm)
// }



// person.age = 33
// console.log(person.age)