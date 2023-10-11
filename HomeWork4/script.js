// ""Получение данных о пользователе""

// Реализуйте функцию getUserData, которая принимает идентификатор пользователя (ID) в качестве аргумента и использует fetch для получения данных о пользователе с заданным ID с удаленного сервера. Функция должна возвращать промис, который разрешается с данными о пользователе в виде объекта. Если пользователь с указанным ID не найден, промис должен быть отклонен с соответствующим сообщением об ошибке.

// Подсказка, с последовательностью действий:
// getUserData использует fetch для получения данных о пользователе с удаленного сервера. Если запрос успешен (с кодом 200), функция извлекает данные из ответа с помощью response.json() и возвращает объект с данными о пользователе. Если запрос неуспешен, функция отклоняет промис с сообщением об ошибке.

function getUserData(userID) {
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(function (response) { 
        if(!response.ok) {
            console.log(`Error. ${response.status}`);
        } else {
            return response.json();
        } 
    })
    .then(function (dataUsers) {
        let flag = false;
            for (let i = 0; i < dataUsers.length; i++) {
                if (flag === false) {
                    if (dataUsers[i].id === userID) {
                        console.log(dataUsers[i]);
                        flag = true;
                        break;
                    }
                }
            }
            if (flag === false) {
                console.log(`Пользователь с id ${userID} не найден!`);
            }
    })
}
  
getUserData(50);
getUserData(6);
  
// ""Отправка данных на сервер""
  
// Реализуйте функцию saveUserData, которая принимает объект с данными о пользователе в качестве аргумента и использует fetch для отправки этих данных на удаленный сервер для сохранения. Функция должна возвращать промис, который разрешается, если данные успешно отправлены, или отклоняется в случае ошибки.
  
// *Подсказка *
// // Пример использования функции
// const user = {
// name: 'John Smith',
// age: 30,
// email: 'john@example.com'
// };
  
// saveUserData(user)
// .then(() => {
// console.log('User data saved successfully');
// })
// .catch(error => {
// console.log(error.message);
// });
  
// saveUserData использует fetch для отправки данных о пользователе на удаленный сервер для сохранения. Она отправляет POST-запрос на URL-адрес /users с указанием типа содержимого application/json и сериализует объект с данными о пользователе в JSON-строку с помощью JSON.stringify(). Если запрос успешен (с кодом 200), функция разрешает промис. Если запрос неуспешен, функция отклоняет промис с сообщени

const user = {
    name: 'John Smith',
    age: 30,
    email: 'john@example.com'
    };

async function saveUserData(userObj) {
    fetch("https://jsonplaceholder.typicode.com/users", {
        method: 'POST',
        body: JSON.stringify(userObj),
        headers: {
            'Content-Type': 'application/json;charset=utf-8',
        },
    })
    .then((response) => {
        if(!response.ok) {
            throw new Error('Данные на сервер не отправлены!')
        }
        return response.json()
    })
    .then((data) => {
        console.log(data);
    }) 
    .catch((err) => {
        console.log(err);
    })
}

saveUserData(user);

// ""Изменение стиля элемента через заданное время""
  
// Напишите функцию changeStyleDelayed, которая принимает идентификатор элемента и время задержки (в миллисекундах) в качестве аргументов. Функция должна изменить стиль элемента через указанное время.
  
// // Пример использования функции
// changeStyleDelayed('myElement', 2000); // Через 2 секунды изменяет стиль элемента с id 'myElement'

function changeStyleDelayed(nameEl, delay) {
    let str = "#" + nameEl;
    console.log(str);
    const p = document.querySelector(str);
    setTimeout(() => {
        p.style.color = 'red';
        p.style.fontSize = '50px'
    }, delay);
}

changeStyleDelayed('myElement', 2000);