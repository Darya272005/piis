// Создаем объект personalMovieDB
const personalMovieDB = {
    privat: false,
    movies: {
        'The Shawshank Redemption': 10,
        'The Godfather': 9,
        'The Dark Knight': 8
    }
};

// Функция для вывода таблицы фильмов
function displayMoviesTable() {
    // Проверяем значение свойства privat
    if (!personalMovieDB.privat) {
        // Получаем ссылку на элемент, куда будем выводить таблицу
        const movieTableElement = document.getElementById('movie-table');

        // Создаем таблицу
        const table = document.createElement('table');
        table.classList.add('table', 'table-striped', 'table-bordered', 'table-hover');

        // Создаем заголовок таблицы
        const tableHeader = document.createElement('thead');
        tableHeader.classList.add('thead-dark');
        const headerRow = document.createElement('tr');
        const titleHeader = document.createElement('th');
        titleHeader.textContent = 'Movie Title';
        const ratingHeader = document.createElement('th');
        ratingHeader.textContent = 'Rating';
        headerRow.appendChild(titleHeader);
        headerRow.appendChild(ratingHeader);
        tableHeader.appendChild(headerRow);
        table.appendChild(tableHeader);

        // Заполняем таблицу данными из объекта movies
        const tableBody = document.createElement('tbody');
        for (const [title, rating] of Object.entries(personalMovieDB.movies)) {
            const dataRow = document.createElement('tr');
            const titleCell = document.createElement('td');
            titleCell.textContent = title;
            const ratingCell = document.createElement('td');
            ratingCell.textContent = rating;
            dataRow.appendChild(titleCell);
            dataRow.appendChild(ratingCell);
            tableBody.appendChild(dataRow);
        }
        table.appendChild(tableBody);

        // Добавляем таблицу на страницу
        movieTableElement.appendChild(table);
    }
}

// Вызываем функцию вывода таблицы
displayMoviesTable();
