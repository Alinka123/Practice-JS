// 1 - отримай body елемент і виведи його в консоль;
// 2 - отримай елемент id="title" і виведи його в консоль;
// 3 - отримай елемент class="list" і виведи його в консоль;
// 4 - отримай всі елементи з атрибутом data-topic і виведи їх в консоль;
// 5 - отримай перший елемент з списку всіх елементів з атрибутом data-topic і виведи його в консоль;
// 6 - отримай останній елемент з списку всіх елементів з атрибутом data-topic і виведи його в консоль;
// 7 - який елемент є сусідом для h1? Знайти і виведи його в консоль;
// 8 - по тегу h3 знайти всі заголовки та виведи їх у консоль;
// 9 - для кожного елмента h3 додай class="active", який змінить колір заголовка на червоний колір
// 10 - знайти елемент li який має атрибут data-topic з значенням "navigation" і виведи його в консоль;
// 11 - додай для знайденого елемента data-topic="navigation" атрибут style і зроби його backgroundColor жовтим
// 12 - у елемента data-topic="navigation" знайди елемент р і зміни його текст на "Я змінив тут текст!".
// 13 - створи const currentTopic = "manipulation"; після цього знайди елемент у якогоо атрибут data-topic має значення, яке зберігається у змінній currentTopic і виведи його в консоль;
// 14 - додай до знайденого елемента атрибут style і зроби його backgroundColor блакитним;
// 15 - знайти в документі заголовок, який має class="completed" і виведи його в консоль;
// 16 - видали елемент li в якому знаходиться заголовок, який має class="completed"
// 17 - після заголовка h1 (перед списком) додай новий елемент p і задай йому наступний текст: "Об'єктна модель документа (Document Object Model)"
// 18 - додай новий елемент списку у кінець списка, його заголовок це - "Властивість innerHTML" а опис (р) - "Ще один спосіб створити DOM-елементи і помістити їх в дерево - це використовувати рядки з тегами і дозволити браузеру зробити всю важку роботу". тобто, потрібно створити елемент LI потім наповнити H3 та P і готову LI закинути у кінець списку
// 19 - зроби це саме, але використовуй шаблонні рядки та метод insertAdjacentHTML()
// 20 - очисти список


// const bodyEl = document.querySelector('body')
// console.log(bodyEl);

// const idTitleEl = document.querySelector('#title')
// console.log(idTitleEl);

// const classListEl = document.querySelector('.list')
// console.log(classListEl);

// const dataTopicEl = document.querySelectorAll('[data-topic]')
// console.log((dataTopicEl));

// const firstLiEl = document.querySelector('[data-topic]')
// console.log(firstLiEl);
// const lastLiEl = dataTopicEl[dataTopicEl.length - 1]
// console.log(lastLiEl);
// const syblingEl = idTitleEl.nextElementSibling
// console.log(syblingEl);
// const h3El = document.querySelectorAll('h3')
// console.log(h3El);
// h3El.forEach(el => {
//     el.classList.add('active')
//     console.log(el);
    
// })
// const liNavEl = document.querySelector('li[data-topic = "navigation"]')
// console.log(liNavEl);
// const changeElColor = liNavEl.setAttribute('style', 'background-color: yellow')

// const pEl = liNavEl.querySelector('p')
// console.log(pEl);
// const changedPEl = pEl.textContent = 'Я змінила тут текст'
// console.log(changedPEl);

// const currentTopic = "manipulation"
// const sameEl = [...dataTopicEl].find(el => el.dataset.topic === currentTopic)
// console.log(sameEl);


// const formatedEl = sameEl.setAttribute('style', 'background-color: blue')

// const titleEl = document.querySelector('h3.completed')
// console.log(titleEl);
// const parentEl = titleEl.closest('li')

// parentEl.remove()
// console.log(document.body.contains(parentEl))
// const newEl = document.createElement('p')
// newEl.textContent = "Об'єктна модель документа (Document Object Model)"


// idTitleEl.append(newEl)
// const newLiEl = document.createElement('li')
// newLiEl.innerHTML = ` <h3>Властивість innerHTML</h3>
//   <p>Ще один спосіб створити DOM-елементи і помістити їх в дерево - це використовувати рядки з тегами 
//   і дозволити браузеру зробити всю важку роботу</p>`

// document.querySelector('.list').append(newLiEl)

// classListEl.insertAdjacentHTML("beforeend",
//     `<li>
//         <h3>Властивість innerHTML</h3>
//   <p>Ще один спосіб створити DOM-елементи і помістити їх в дерево - це використовувати рядки з тегами 
//             і дозволити браузеру зробити всю важку роботу</p>
//     </li>`
// )
// classListEl.remove()






// Створіть контейнер div (з класом number-container) в HTML-документі 
// та динамічно створіть 100 блоків (з класом number) наповнивши їх рандомними
// числами від 1 до 100 і додайте їх до контейнера div(numberContainer). 
// Парні числа повинні мати зелений фон (додати клас even), 
// Непарні числа - жовтий фон (додати клас odd).

// const randomNumber = () => Math.floor(Math.random() * 100) + 1;
// const containerEl = document.querySelector('.number-container')

// for (let i = 0; i < 100; i++){
//     const number = randomNumber()
//     const newEl = document.createElement('span')
//     newEl.classList.add('number')

//     if (number % 2 === 0) {
//         newEl.classList.add('even') 
//       newEl.setAttribute('style', 'background-color: green')  
//     } else {
//         newEl.classList.add('odd')
//         newEl.setAttribute('style', 'background-color: yellow')
//     }
// newEl.textContent=number
//     containerEl.append(newEl)
// }


// Form Events, Input, Focus, Blur and Submit.
// Використовуй шаблон форми з файлу html.

// 1 - При події `input`, якщо користувач ввів в поле більше 
// 6 символів то додати клас `success`. Якщо ж символів менше аніж 6,
// то клас `error`

// 2 - При події `focus` зроби перевірку на пустоту поля інпута,
// якщо ж поле пусте, то зроби `outline` => `'3px solid red'`,
// якщо при фокусі поле непусте, то `outline` => `'3px solid green'`

// 3 - При події `blur` зроби перевірку на пустоту поля інпута,
// якщо ж поле пусте, то зроби `outline` => `'3px solid red'`, 
// якщо при фокусі поле непусте, то `outline` => `'3px solid lime'`
// 4 - При події `submit`. Відміни поведінку браузера по змовчуванню.
// Дістань данні з інпуту і чек боксу, зроби перевірку, 
// що інпут не порожній, також, що нажатий чек бокс у положення true,
// якщо користувач все виконав вірно, збери данні (userName)
// у обьект і виведи у консоль. У разі, якщо користувач не виконав
// одну із умов, виведи повідомлення. 
// Також при події інпут реалізуй додавання 
// ім`я користувача у span, замість слова "Anonymous".
// Якщо користувач ввів ім`я, а потім видалив, зроби так,
// щоб на місце повернулось дефолтне знаяення "Anonymous".
// При відправці форми, очисти інпут, верни чек бокс у положення 
// false, верни дефолтне значення "Anonymous" у span.


// const formEl = document.querySelector('.js-contact-form')
// const inputEl1 = document.querySelector('input[type="text"]')
// const checkboxEl = document.querySelector('input[type="checkbox"]')
// const spanEl = document.querySelector('.js-username-output')
// const btnEl = document.querySelector('.js-contact-form-submit')


// inputEl1.addEventListener('input', handleNameInput);
// function handleNameInput(e) {
//     const userValue = e.target.value;
//     if (userValue.length > 6) {
//         e.target.classList.remove('error')
//     e.target.classList.add('success')
//     } else {
//          e.target.classList.remove('success')
//         e.target.classList.add('error')
//     }
// }
// inputEl1.addEventListener('focus', handleFocusInput)
// function handleFocusInput(e) {
//     const fieldValue = e.target.value
//     if (fieldValue === '') {
//         e.target.style.outline =  '3px solid red'
//     } else {
//         e.target.style.outline = '3px solid green'
//     }
// }

// inputEl1.addEventListener('blur', handleBlurInput)
// function handleBlurInput(e) {
//     const fieldValue = e.target.value
//     if (fieldValue === '') {
//         e.target.style.outline =  '3px solid red'
//     } else {
//         e.target.style.outline = '3px solid lime'
//     }
// }
// formEl.addEventListener('submit', handleBtnSubmit)
// function handleBtnSubmit(e){
//     e.preventDefault()
//     const value = inputEl1.value
//     const isChecked = checkboxEl.checked
//     if (value.trim() !== '' && isChecked) {
//         const userData = {
//             userName: value,
//             checkBox: isChecked

//         }
        
//         console.log(userData);
//         formEl.reset()
//         spanEl.textContent = 'Anonymous'
        
//     } else {
//         alert('Please, fill up all required fields')
//     }

// }

// inputEl1.addEventListener('input', handleValueInput)
// function handleValueInput(e) {
//     if (e.target.value.trim() !== '') {
//      spanEl.textContent = e.target.value   
//     } else {
//         spanEl.textContent = 'Anonymous'
//     }

    
// }












 // Використовуй шаблон розмітки з файлу html та напиши наступний функціонал:
 // При кліку на кнопку "Зменшити" квадрат стає меньшим на 20 пікселів, 
 // При кліку на кнопку "Збільшити" - квадрат стає більшим на 20 пікселів.

const boxEl = document.querySelector('.box')
const incrEl = document.querySelector('#increase')
const decrEl = document.querySelector('#decrease')

incrEl.addEventListener('click', handleIncBtnClick)
decrEl.addEventListener('click', handleDcrBtnClick)
function handleIncBtnClick() {
    const width = boxEl.offsetWidth
    const height = boxEl.offsetHeight
    boxEl.style.width = (width + 20) + 'px'
    boxEl.style.height = (height+20)+'px'
}


function handleDcrBtnClick() {
    const width = boxEl.offsetWidth
    const height = boxEl.offsetHeight
    boxEl.style.width = (width - 20) + 'px'
    boxEl.style.height = (height-20)+'px'
}
