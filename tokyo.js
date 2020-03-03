'use strict'
//2020
function countdown1(due) {
    const now = new Date();

    const rest = due.getTime() - now.getTime();
    const sec = Math.floor(rest / 1000) % 60;
    const min = Math.floor(rest / 1000 / 60) % 60;
    const hours = Math.floor(rest / 1000 / 60 / 60) % 24;
    const days = Math.floor(rest / 1000/ 60 / 60 / 24);
    const count = [days, hours, min, sec];

    return count;
}

const goal1 = new Date(2020, 6, 24);

console.log(countdown1(goal1));
function recalc1() {
    const counter = countdown1(goal1);
    document.getElementById('day1').textContent = counter[0];
    document.getElementById('hour1').textContent = counter[1];
    document.getElementById('min1').textContent = String(counter[2]).padStart(2, '0');
    document.getElementById('sec1').textContent = String(counter[3]).padStart(2, '0');//文字列を扱う
    // console.log(sec1);
    refresh1();
}    

function refresh1() {
    setTimeout(recalc1, 1000);
}

recalc1();

//1964
function countdown2(due) {
    const now = new Date();
    const rest = now.getTime() - due.getTime();
    const sec = Math.floor(rest / 1000) % 60;
    const min = Math.floor(rest / 1000 / 60) % 60;
    const hours = Math.floor(rest / 1000 / 60 / 60) % 24;
    const days = Math.floor(rest / 1000/ 60 / 60 / 24 );
   const years = Math.floor(rest / 1000 / 60 / 60 / 24 / 365.2425);
    const count = [years, days, hours, min, sec];

    return count;
}

const goal2 = new Date(1964, 9, 24);

console.log(countdown2(goal2));
function recalc2() {
    const counter = countdown2(goal2);
    // document.getElementById('year2').textContent = counter[0];
    document.getElementById('day2').textContent = counter[0];
    document.getElementById('hour2').textContent = counter[1];
    document.getElementById('min2').textContent = String(counter[2]).padStart(2, '0');
    document.getElementById('sec2').textContent = String(counter[3]).padStart(2, '0');
    refresh2();
}    

function refresh2() {
    setTimeout(recalc2, 1000);
}

recalc2();
//イメージの切り替え
const thumbs = document.querySelectorAll('.thumb');
thumbs.forEach(function(item, index){
    item.onclick = function() {
        // console.log(this.dataset.image);
        document.getElementById('a1964').src = this.dataset.image;
    }

});


//電卓
let result = document.getElementById("result");
function edit(elem) {
    result.value = result.value + elem.value;
}
function calc() {
    result.value = new Function("return " + result.value)();
}

// document.getElementById(ac).onclick.textContent="";

//世界時計



// console.log('sekaitokei');

// let tz_jp = 9 * 60;
// let tz_uk = 0 * 60;
// let tz_ny = -5 * 60;
// let tz_los = -8 * 60;
// let tz_hk = 8 * 60;
// let tz_sin = 8 * 60;
// let tz_paris = 1 * 60;

// let uk, jp, ny, los, hk, sin, paris;

// function update_watch() {
//     let now = new Date();
//     let jp = nowat(now, tz_jp)
//     let uk = nowat(now, tz_uk)
//     let ny = nowat(now, tz_ny)
//     let los = nowat(now, tz_los) 
//     let hk = nowat(now, tz_hk) 
//     let sin = nowat(now, tz_sin) 
//     let paris = nowat(now, tz_paris) 

//     let value = 0;
//     // document.forms[0].elements[0].value = jp
//     // document.forms[0].elements[1].value = uk
//     // document.forms[0].elements[2].value = ny
//     // document.forms[0].elements[3].value = los
//     // document.forms[0].elements[4].value = hk
//     // document.forms[0].elements[5].value = sin
//     // document.forms[0].elements[6].value = paris
//     document.getElementById('sekaitokei').select.value;

//     setTimeout('update_watch()', 999);
// }

// function nowat(now,tz) {
//     let hour, min ,sec;
//     let t = new Date();
//     t.setTime(now.getTime() + (now.getTimezoneOffset() + tz)* 60 * 1000);
//     hour = t.getHours();
//     min = t.getMinutes();
//     sec = t.getSeconds();
//     if (hour < 10) {
//         hour = "0" + hour;
//     } if (min < 10) {
//         min = "0" + min;
//     } if (sec < 10) {
//         sec = "0" + sec;
//     } 
//     return hour + ":" + min + ":" + sec;
// }
// update_watch();

// document.getElementById('sekaitokei').select.onchange = function() {
//     location.href = document.getElementById('sekaitokei').select.value;
// }

// おみくじ
{
    const btn = document.getElementById('btn');
  
    btn.addEventListener('click', function() {
      const results = ['大吉', '中吉', '凶', '末吉', '小吉'];
      btn.textContent = results[Math.floor(Math.random())]; //* results.length)];
      
      const n = Math.random();
      console.log(n);
      if (n < 0.2) {
        btn.textContent = '大吉';
      }else if(n < 0.4){
        btn.textContent = '中吉';
      }else if(n < 0.6) {  
        btn.textContent = '凶';
      }else if(n < 0.8) {  
        btn.textContent =  '末吉';
      }else if(n < 1) {  
        btn.textContent =  '小吉';
      } else {
        btn.textContent = 'エラー';
      }
    });
  }