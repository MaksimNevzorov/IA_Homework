export const ANKETA = ()=>{

    let lastName,
    firstName,
    middleName,
    age,
    sex,
    pension;

do {
    lastName = prompt('Ваша фамилия?', '');
} while (lastName.length < 1 || lastName.typeof === Number);

do {
    firstName = prompt('Ваше имя?', '');
} while (firstName.length < 1 || firstName.typeof === Number);

do {
    middleName = prompt('Ваше отчество?', '');
} while (middleName.length < 1 || middleName.typeof === Number);

do {
    age = +prompt('Сколько Вам полных лет?', '');
} while (age ==  '');


 if (confirm('Вы мужчина?', '') == true){
    sex = 'Мужской'
} else { 
    sex = 'Женский'
} ;

if (age < 60){
    pension = 'Нет'
} else {
    pension = 'Да'
}


alert(`Ваше ФИО: ${lastName} ${firstName} ${middleName}\n 
Вам полных лет: ${age}\n 
Ваш пол:  ${sex}` + 
`\nЧерез 5 лет Вам будет` + ' ' +(age + 5) +
`\nПенсия: ${pension}`);

}