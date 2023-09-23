const movieList = [
    {
        title: "Batman",
        year: 1989,
        director: "Tim Burton",
        imdbRating: 7.6
    },
    {
        title: "Batman Returns",
        year: 1992,
        director: "Tim Burton",
        imdbRating: 7.0
    },
    {
        title: "Batman Forever",
        year: 1995,
        director: "Joel Schumacher",
        imdbRating: 5.4
    },
    {
        title: "Batman & Robin",
        year: 1997,
        director: "Joel Schumacher",
        imdbRating: 3.7
    },
    {
        title: "Batman Begins",
        year: 2005,
        director: "Christopher Nolan",
        imdbRating: 8.3
    },
    {
        title: "The Dark Night",
        year: 2008,
        director: "Christopher Nolan",
        imdbRating: 9.0
    },
    {
        title: "The Dark Knight Rises",
        year: 2012,
        director: "Christopher Nolan",
        imdbRating: 8.5
    }
];

// getting titles
let titles = []
for (let m of movieList) {
    titles.push(m.title)
}
console.log(titles)

let nolanList = [];
for (let m of movieList) {
    if (m.director === "Christopher Nolan")
        nolanList.push()
}
console.log(nolanList)

const ratedM = []
for (let m of movieList) {
    if(m.imdbRating >= 7.5) {
        ratedM.push(m.title)
    }
}
console.log(ratedM)

// getting average rating
let sum = 0
let avg = 0
for(let m of nolanList) {
    sum = sum + m.imdbRating
}
avg = sum / nolanList.length
console.log(avg)


// Imperative to declarative
// 1. Counter any mutations by Converting let vars to const
// 2. Split program by Converting to functions
// 3. Keep Functions pure (having their own parameters, not using global vars)
// 4. Minimal loops used, perform array op usage


// working with titles example above
const titles1 = () => {
    const titles = [];
    for(const m of movieList) {
        titles.push(m.title)
    }
    return titles
}
console.log(titles1())


// working with average rating example above
const getAvgRating = () => {
    let avg = 0
    let sum = 0
    for(const m of nolanList) {
        sum = sum + m.imdbRating
    }
    avg = sum / nolanList.length
}


// Making Pure Function
// Passing the array as a parameter (not using movieList from global scope)
const titles2 = movies => {
    const titles = [];
    for(const m of movies) {
        titles.push(m.title)
    }
    return titles
}
console.log(titles2(movieList))


// Using bult-in array function
const titles3 = movies => movies.map(elem => elem.title)


// Finding christopher nolan movies using declarative function
const nolanList2 = movies => movies.filter(elem => elem.director === "Christopher Nolan");
console.log(nolanList2(movieList))
// the above will return whole objects in array
// for just title we need to perform

// Call map at the end to perform a certain operation on every object (in this case, return each object's title)
const nolanList3 = movies => movies.filter(elem => elem.director === "Christopher Nolan").map(elem=>elem.title)

const avg2 = movies => movies.reduce((sum, movies) => sum + movies.imdbRating, 0) / movies.length
console.log(avg2(movieList))

// Performing average for only Nolan's list
console.log(avg2(nolanList2(movieList)))

