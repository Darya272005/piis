let numberOfFilms;

while (true) {
    numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?');
    if (numberOfFilms !== null && numberOfFilms !== '' && !isNaN(numberOfFilms)) {
        numberOfFilms = Number(numberOfFilms);
        break; 
    }
    alert('Пожалуйста, введите корректное число.');
}

const personalMovieDB = {
    count: numberOfFilms,
    movies: {}
};

for (let i = 0; i < 2; i++) {
    let movieName, movieRating;

    while (true) {
        movieName = prompt('Один из последних просмотренных фильмов?');
        if (movieName !== null && movieName.length > 0 && movieName.length <= 50) {
            break; 
        }
        alert('Введите корректное название фильма (не более 50 символов и не пустую строку).');
    }

    while (true) {
        movieRating = prompt('На сколько оцените его?');
        if (movieRating !== null && movieRating !== '') {
            break; 
        }
        alert('Введите оценку фильма.');
    }

    personalMovieDB.movies[movieName] = movieRating; 
}

console.log(personalMovieDB);
