/*Есть класс Planet
function Planet(name) {
	this.name = name;
	this.getName = function () {
		return 'Planet name is ' + this.name;
	}
}
Создать наследника от Planet, который будет называться PlanetWithSatellite и будет
принимать, кроме name, название спутника (satelliteName). Переопределите метод
getName для PlanetWithSatellite так, чтобы он возвращал ту же самую строчку +
дополнительный текст 'The satellite is' + satelliteName.
	Например:
var earth = new PlanetWithSatellite('earth', 'moon');
earth.getName(); // 'Planet name is earth. The satellite is moon’*/


/*class Planet {
	constructor (name){
		this.name = name;
	}
	getName() {
	   return  'Planet name is ' + this.name
	}
}
let res = new Planet('Earth')
class PlanetWithSatellite extends Planet {
	constructor (name, satelliteName){
	    super(name)
	this.satelliteName = satelliteName;
	}
	getNewName(){
	    console.log(res.getName() + 'The satellite is ' + this.satelliteName)
    }
}
let sum = new PlanetWithSatellite('Earth', 'moon')
sum.getNewName()*/
/*2. Создайте класс “Здание” (пусть у него будет имя, количество этажей, метод “получить количество этажей” и метод “установить количество этажей”).
Создайте наследников этого класса:
	классы “Жилой дом” и “Торговый центр”. Используйте функциональное наследование

У жилого дома появится свойство “количество квартир на этаже”, а метод “получить количество этажей” должен вернуть объект вида {этажи: 5, всегоКвартир: 5 * количествоКвартир}

У торгового центра появится свойство “количество магазинов на этаже”, а метод “получить количество этажей” должен вернуть объект вида {этажи: 3, всегоМагазинов: 3 * количествоМагазинов}
*/
/*class Building {
	constructor(name, countOfFloors){
		this.name = name;
		this.countOfFloors = countOfFloors;
	}
	setFloors(value){
		this.countOfFloors = value;
	}
	getFloors(){
		return this.countOfFloors;
	}
}

const b1 = new Building ('name1', 12);
b1.setFloors(13);
console.log(b1.getFloors())
class House extends Building {
	constructor(name, countOfFloors, countOfFlats){
		super(name, countOfFloors)
		this.countOfFlats = countOfFlats;
	}
	getCountOfFloors(){
		return{
			floors: this.countOfFloors,
			flats: this.countOfFloors * this.countOfFlats
		}
	}
}


const h1 = new House ('dom1', 3, 2)
console.log(h1.getCountOfFloors())

class Shop extends Building {
	constructor(name,countOfFloors, countOfShops){
		super(name,countOfFloors);
		this.countOfShops = countOfShops;
	}
	getCountOfShops(){
		return{
			floors: this.countOfFloors,
			flats: this.countOfFloors * this.countOfShops
		}
	}
}
*/

//3. Создать класс “Мебель” с базовыми свойствами “имя”, “цена” и методом “получить информацию” (метод должен вывести имя и цену). Метод должен быть объявлен с помощью прототипов (Func.prototype...). Создать два экземпляра класса “Мебель”: экземпляр “ОфиснаяМебель” и
// “Мебель для дома”. Придумайте им по одному свойству, которые будут характерны только для этих экземпляров (например, для офисной мебели - наличие компьютерного стола или шредера). Метод “получить информацию” должен учитывать и добавленное вами новое свойство.
// Задача на переопределение метода у экземпляров класса.

class Mebel {
    constructor(name, price){
        this.name = name;
        this.price = price;
    }
}
Mebel.prototype.getInfo = function() {
    console.log(this.name, this.price)
}

class OfficeMуbel extends Mebel {};
OfficeMуbel.prototype.getPrice = function(amount) {
    console.log("Price: " + amount*this.price);
}

class HomeMebel extends Mebel {};
HomeMebel.prototype.getAmount = (amount) => {
    console.log('Amount:' + amount)
}

let s = new Mebel('Tabel', 10);
s.getInfo();

let office = new OfficeMуbel('Tabel', 10);
office.getPrice(4);

let home = new HomeMebel('Computer', 20)
home.getAmount(5)
//4. Создать класс “Пользователь” с базовыми свойствами “имя”, “дата регистрации” и методом “получить информацию” (метод должен вывести имя и дату регистрации). Метод должен быть объявлен с помощью прототипов (Func.prototype...) Создать два наследника класса “Пользователь”: класс “Админ” и класс “Гость”.
// У класса “Админ” должно быть дополнительное свойство “суперАдмин” (может быть
// true/false, должно быть скрытым). Свойства определяются в момент вызова
// конструктора.
// У класса “Гость” должно быть свойство “срокДействия” (validDate, например), содержащее дату (например, одну неделю от момента регистрации).
// У классов-наследников метод “получить информацию” должен так же содержать информацию о дополнительных свойствах (“суперАдмин” и “срокДействия”)
class User {
    constructor(name, data) {
        this.name = name;
        this.data = data;
    }
    getInfo(){
        console.log(this.name , this.data)
    }
}

class Admin extends User {

    constructor(name,data , superAdmin) {
        super(name, data);
        this.superAdmin = superAdmin;
    }
    getInfo(){
        console.log(this.superAdmin)
    }

}
class Guest extends User {
    constructor(name, data, validDate) {
        super(name, data)
        this.validDate = validDate;
    }
    getInfo() {
        console.log(this.validDate)
    }
}
let user = new User('Name','data')
let admin = new Admin('ывфв','dsdsd', 12)
let guest = new Guest('')
if(admin.getInfo().typeOf != boolean){
    console.log('Не являеться булевым значением ')
}
user.getInfo()







