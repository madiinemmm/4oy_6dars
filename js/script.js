// 1
// let n = 20;
// let sum = 0;
// for(let i = 1; i <= n; i++) {
//   if(i % 2 == 0) {
//     sum = sum + i;
//   }
// } console.log(sum);

// 2
// let n = 10;
// let sum = 1;
// for(let i =1; i <= n; i++) {
//     if(i % 3 == 0) {
//         sum = sum * i;
//     }
// } console.log(sum);

// 3
// let a = 10;
// let b = 100;
// let counter;
// for(let i = a; i <= b; i++) {
//  if(i % 3 == 0 && i % 7 == 0) {
//      console.log(i);
//  }
//  }

// 4
// let n = 10;
// let counter = 0
// for(let i =1; i<=n; i++) {
//     if(n % i == 0) {
//         counter++;
//     }
// } 
// if(counter == 2) {
//     console.log("tub son");
// } else {
//     console.log("tub son emas");
// }

// let son = +prompt("Sonni kiriting");
// let sum = 0;
// while (son >= 1) {
//   sum = sum + (son % 10);
//   son = Math.trunc(son / 10);
// }
// console.log(sum);

// let n = 357;
// let b = n % 10;
// let o = Math.trunc(n / 10);
// let y = Math.trunc(n / 100) % 10;

// let result = '';

// switch (y) {
//     case 1:
//         result = `bir yuz`;
//         break;
//         case 2:
//             result = `ikki yuz`;
//             break;
//             case 3:
//                 result = `uch yuz`;
//                 break;
//                 case 4:
//                     result = `tort yuz`;
//                     break;
//                     case 5:
//                         result = `besh yuz`;
//                         break;
//                         case 6:
//                             result = `olti yuz`;
//                             break;
//                             case 7:
//                                 result = `yetti yuz`;
//                                 break;
//                                 case 8:
//                                     result = `toqqiz yuz`;
//                                     break;

//     default:   
//         break;
// }
// switch (o) {
//     case 1:
//         result += "on"
//         break;
//         case 2:
//             result += "yigirma"
//             break;
//             case 3:
//                 result += "ottiz"
//                 break;
//                 case 4:
//                     result += "qirq"
//                     break;
//                     case 5:
//                         result += "ellik"
//                         break;
//                         case 6:
//                             result += "oltmish"
//                             break;
//                             case 7:
//                                 result += "yetmish"
//                                 break;
//                                 case 8:
//                                     result += "sakson"
//                                     break;
//                                     case 9:
//                                         result += "toqson"
//                                         break;

//     default:
//         break;
// }
// switch (b) {
//     case 1:
//         result += "bir"
//         break;
//         case 2:
//             result += "ikki"
//             break;
//             case 3:
//                 result += "uch"
//                 break;
//                 case 4:
//                     result += "tort"
//                     break;
//                     case 5:
//                         result += "besh"
//                         break;
//                         case 6:
//                             result += "olti"
//                             break;
//                             case 7:
//                                 result += "yetti"
//                                 break;
//                                 case 8:
//                                     result += "sakkiz"
//                                     break;
//                                     case 9:
//                                         result += "toqqiz"
//                                         break;

//     default:
//         result = 'Bunday son mavjud emas!!'
//         break;
// } console.log(result);