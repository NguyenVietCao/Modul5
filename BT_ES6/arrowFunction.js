// =========== ARROW FUNCTION ========= //

const sayHello = (name) => {
    console.log("HELLO" + name);
};

sayHello("Cao");

const randomNumbs = [2,7,9];
const newRandomNumbs = randomNumbs.reduce((newArr,numb) => {
    newArr.push(numb * 2);
    return newArr;
},[]);
console.log(newRandomNumbs);