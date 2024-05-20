let key = prompt("Enter key:");
let obj ={};
while (key !== "stop") {
    let val = prompt("value:");
    obj[key] =val;
    key = prompt("key:");  // รับค่า key ถัดไป
}
console.log(obj);