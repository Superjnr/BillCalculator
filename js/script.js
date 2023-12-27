'use strict'

const food = document.getElementById('food')
const tip = document.getElementById('tip')
const btn = document.getElementById('calc')
const btn2 = document.getElementById('clear')
let print = document.querySelector('.total') 
const p = document.querySelector('.totaldiv') 



const calcTip = (a, b) => a * b / 100 
const tot = (a, b) => a + b

  btn.onclick = () => {
   print.innerHTML = (Number(food.value) + calcTip(food.value, tip.value))
   p.style.display = 'block'
  } 

  btn2.onclick = () => {
   p.style.display = 'none'
   food.value =' '
   tip.value = ' '
  } 