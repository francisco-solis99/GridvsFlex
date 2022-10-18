// Section 1 - Axis Flipping
const btnFlipFlex = document.querySelector('#btn-flex-flip');
const btnFlipGrid = document.querySelector('#btn-grid-flip');

btnFlipFlex.addEventListener('click', () =>  {
  const flexAxisContainer = document.querySelector('.flex.axis-flip');
  flexAxisContainer.classList.toggle('isFlipped');
});

btnFlipGrid.addEventListener('click', () =>  {
  const gridAxisContainer = document.querySelector('.grid.axis-flip');
  gridAxisContainer.classList.toggle('isFlipped');
});



// Section 6 - Unknown items
const btnAddFlex = document.querySelector('#btn-flex-add');
const btnAddGrid = document.querySelector('#btn-grid-add');


btnAddFlex.addEventListener('click', () =>  {
  const flexUnknown = document.querySelector('.flex.unknown');
  flexUnknown.innerHTML += `<div class="item">${flexUnknown.childElementCount + 1}</div>`;
});

btnAddGrid.addEventListener('click', () =>  {
  const gridUnknown = document.querySelector('.grid.unknown');
  gridUnknown.innerHTML += `<div class="item">${gridUnknown.childElementCount + 1}</div>`;
});
