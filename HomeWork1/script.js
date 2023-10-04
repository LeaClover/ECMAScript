// 1) Дан массив const arr = [1, 5, 7, 9] с помощью Math.min и spread оператора, найти минимальное число в массиве, решение задание должно состоять из одной строки

const arr = [1, 5, 7, 9];
// const arr = [3, 5, 2, 5, 7];
console.log(Math.min(...arr));

// 2) Напишите функцию createCounter, которая создает счетчик и возвращает объект с двумя методами: increment и decrement. Метод increment должен увеличивать значение счетчика на 1, а метод decrement должен уменьшать значение счетчика на 1. Значение счетчика должно быть доступно только через методы объекта, а не напрямую.

function createCounter() {
    let count = 0;
    return {
        increment: () => { count++ },
        decrement: () => { count-- },
        result: () => count
    }
}
const crCount = createCounter();
crCount.increment();
console.log(crCount.result());
crCount.decrement();
console.log(crCount.result());

// 3) Напишите рекурсивную функцию findElementByClass, которая принимает корневой элемент дерева DOM и название класса в качестве аргументов и возвращает первый найденный элемент с указанным классом в этом дереве.
// Пример
// const rootElement = document.getElementById('root');
// const targetElement = findElementByClass(rootElement, 'my-class');
// console.log(targetElement);

function findElementByClass(rootEl, classN) {
    if (rootEl.children.length !== 0) {
        const arrChilds = rootEl.children;
        console.log(arrChilds);
        for (let i = 0; i < arrChilds.length; i++) {
            if (arrChilds[i].className !== classN) {
                console.log(arrChilds[i]);
                return arrChilds[i];
            } else {
                findElementByClass(arrChilds[i], classN);
            }
        }
    }
    return 'ok';
}

const rootElement = document.getElementById('root');
console.log(rootElement);
const targetElement = findElementByClass(rootElement, 'second__p');
console.log(targetElement);
