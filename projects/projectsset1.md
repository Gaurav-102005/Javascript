# Projects related to DOM

## project link
[Click here](https://stackblitz.com/edit/dom-project-chaiaurcode-vhcd7zt1?file=1-colorChanger%2Fchaiaurcode.js)

# Solution code


## project 1

```javascript

const buttons = document.querySelectorAll('.button')
const body = document.querySelector('body')

buttons.forEach(function(button) {
  // console.log(button)
  button.addEventListener('click', function(e) {
    console.log(e)
    console.log(e.target)
    if(e.target.id === 'grey'){
      body.style.backgroundColor = e.target.id
    }
    if(e.target.id === 'white'){
      body.style.backgroundColor = e.target.id
    }
    if(e.target.id === 'blue'){
      body.style.backgroundColor = e.target.id
    }
    if(e.target.id === 'yellow'){
      body.style.backgroundColor = e.target.id
    }
    if(e.target.id === 'purple'){
      body.style.backgroundColor = e.target.id
    }
  })
})

```

## project 2

```javascript

const form = document.querySelector('form');

// This use case will give you empty value
// const height = parseInt(document.querySelector('#height').value)

form.addEventListener('submit', function (e) {
  e.preventDefault();
  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const results = document.querySelector('#results');

  if (isNaN(height) || height < 0) {
    results.innerHTML = `Please give a valid Height ${height}`;
  } else if (isNaN(weight) || weight < 0) {
    results.innerHTML = `Please give a valid Weight ${weight}`;
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    // Show the results
    if (bmi < 18) {
      results.innerHTML = `<span>${bmi} => Under Weight</span>`;
    } else if (bmi >= 18 && bmi < 25) {
      results.innerHTML = `<span>${bmi} => Normal Range</span>`;
    } else {
      results.innerHTML = `<span>${bmi} => Overweight</span>`;
    }
  }
});

```

## project 3

```javascript

const clock = document.getElementById('clock')

setInterval(function(){
  let date = new Date()
  // console.log(date.toLocaleTimeString())
  clock.innerHTML = date.toLocaleTimeString()
}, 1000);

```