console.log("Це повідомлення з'явиться в консолі!");
document.body.style.backgroundColor = "lightblue";
function changeContent() {
    // Змінюємо текст заголовка
    const heading = document.getElementById('heading');
    heading.textContent = "Ого! Ти натиснув кнопку!";

    // Змінюємо фон сторінки
    document.body.style.backgroundColor = getRandomColor();
}

function getRandomColor() {
    // Генеруємо випадковий колір
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
function resetBackground() {
    // Скидаємо фон до білого
    document.body.style.backgroundColor = "white";

    // Повертаємо текст до початкового
    const heading = document.getElementById('heading');
    heading.textContent = "Фон скинуто!";
}
function updateHeading() {
    // Отримуємо значення з текстового поля
    const textInput = document.getElementById('textInput');
    const newText = textInput.value;

    // Оновлюємо текст заголовка
    const heading = document.getElementById('heading');
    heading.textContent = newText;

    // Очищаємо текстове поле
    textInput.value = '';
}
function changeImage() {
    // Отримуємо елемент картинки
    const image = document.getElementById('image');

    // Змінюємо URL картинки
    const images = [
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjEhA_a_WTP3YhrM71AdIOFq87Z34s55Q9Kw&s/FF5733', // Червоний фон
        'https://cakeshop.com.ua/images/AcpSe7kFpmzMfgJUwhyXbNbja_gwkleunua5ZVM9jTQ/h:5000/bG9jYWw/6Ly8vY2FrZXNob3AuY29tLnVhL3B1YmxpY19odG1sL3N0b3JhZ2UvYXBwL3B1YmxpYy9pbWcvcHJvZHVjdC81NzEzXzEuanBn/33FF57', // Зелений фон
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJ0PJx5sp2J8ieLzPHBz5N4xYJb7giAqZMMg&s/3357FF'  // Синій фон
    ];

    // Генеруємо випадковий індекс
    const randomIndex = Math.floor(Math.random() * images.length);

    // Встановлюємо нову картинку
    image.src = images[randomIndex];
}
function greetUser() {
    // Отримуємо ім'я з текстового поля
    const nameInput = document.getElementById('nameInput').value;

    // Перевіряємо, чи поле не пусте
    if (nameInput.trim() === "") {
        alert("Будь ласка, введіть ім'я!");
        return;
    }

    // Відображаємо привітання
    const greetingMessage = document.getElementById('greetingMessage');
    greetingMessage.textContent = `Привіт, ${nameInput}! Радий тебе бачити!`;

    // Очищаємо текстове поле
    document.getElementById('nameInput').value = '';
}
