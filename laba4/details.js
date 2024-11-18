document.addEventListener('DOMContentLoaded', () => {
    const shirt = JSON.parse(localStorage.getItem('selectedShirt'));

    if (shirt) {
        document.getElementById('shirt-name').textContent = shirt.name;
        document.getElementById('shirt-description').textContent = shirt.description;
        document.getElementById('shirt-price').textContent = shirt.price;

        const imgElement = document.getElementById('shirt-image');
        imgElement.src = shirt.colors?.white?.front || shirt.default.front;

        const colorOptions = document.getElementById('color-options');
        for (const color in shirt.colors) {
            const button = document.createElement('button');
            button.textContent = color;
            button.style.backgroundColor = color; // Устанавливаем цвет кнопки
            button.style.color = 'white'; // Цвет текста на кнопке
            button.style.margin = '5px';
            button.addEventListener('click', () => {
                imgElement.src = shirt.colors[color].front; // Меняем изображение при выборе цвета
            });
            colorOptions.appendChild(button);
        }
    } else {
        // Если футболка не найдена, отображаем сообщение
        document.body.innerHTML = '<h2>Футболка не найдена</h2>';
    }

    document.getElementById('back-button').addEventListener('click', () => {
        window.history.back();
    });
});