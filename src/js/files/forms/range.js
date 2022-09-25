// Подключение из node_modules
import * as noUiSlider from 'nouislider';

// Подключение стилей из scss/base/forms/range.scss
// в файле scss/forms/forms.scss

// Подключение cтилей из node_modules
// import 'nouislider/dist/nouislider.css';

export function rangeInit() {
  const priceSlider = document.querySelector('#rangeCommission');
  if (priceSlider) {
    noUiSlider.create(priceSlider, {
      start: [1, 3], // [0,200000]
      connect: true,
      range: {
        'min': 0,
        '25%': 1,
        '50%': 2,
        '75%': 3,
        'max': 4
      },
      snap: true,
    });

    const priceStart = priceSlider.parentNode.querySelector('#price-start');
    const priceEnd = priceSlider.parentNode.querySelector('#price-end');

    if (priceStart && priceEnd) {

      priceSlider.noUiSlider.on('update', function (values, handle) {
        let value = values[handle];

        if (handle) {
          priceEnd.innerText = Math.round(value);
        } else {
          priceStart.innerText = Math.round(value);
        }
      });
    }
  }

  const priceSlider2 = document.querySelector('#rangePlayer');
  if (priceSlider2) {
    noUiSlider.create(priceSlider2, {
      start: [20, 30], // [0,200000]
      connect: true,
      range: {
        'min': 0,
        '25%': 10,
        '50%': 20,
        '75%': 30,
        'max': 40
      },
      snap: true,
    });

    const priceStart = priceSlider2.parentNode.querySelector('#price-start');
    const priceEnd = priceSlider2.parentNode.querySelector('#price-end');

    if (priceStart && priceEnd) {

      priceSlider2.noUiSlider.on('update', function (values, handle) {
        let value = values[handle];

        if (handle) {
          priceEnd.innerText = Math.round(value);
        } else {
          priceStart.innerText = Math.round(value);
        }
      });
    }
  }

  const priceSlider3 = document.querySelector('#rangeCommission2');
  if (priceSlider3) {
    noUiSlider.create(priceSlider3, {
      start: 3, // [0,200000]
      connect: true,
      range: {
        'min': 1,
        '25%': 3,
        '50%': 5,
        '75%': 7,
        'max': 9
      },
      snap: true,
    });

    const priceStart = priceSlider3.parentNode.querySelector('#price-start');

    if (priceStart) {

      priceSlider3.noUiSlider.on('update', function (values, handle) {
        let value = values[handle];

        priceStart.innerText = Math.round(value);
      });
    }
  }
}

rangeInit();
