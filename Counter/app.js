let count = 0
const value = document.querySelector('#value')
const btns = document.querySelectorAll('.btn')
// const btn_decrease = document.querySelector('.btn decrease')
// const btn_reset = document.querySelector('.btn reset')
// const btn_increase = document.querySelector('.btn increase')

// document.addEventListener('click', function() {
// count = 0;
// console.log(count)
// })
console.log(btns)
btns.forEach(function(btn) {
    btn.addEventListener('click', function(e) {
        const styles = e.currentTarget.classList
        if (styles.contains('decrease')) {
            count--
        }       
        else if (styles.contains('reset')) {
            count=0
        }
        else if (styles.contains('increase')) {
            count++
        }
        if(count>0) {
            value.style.color = 'green'
        }
        else if(count<0) {
            value.style.color = 'red'
        }
        else {
            value.style.color = 'black'
        }
        value.textContent = count
    })
})