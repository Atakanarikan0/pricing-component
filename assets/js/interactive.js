pageViewRange.addEventListener('input', handlePageViewChange);

const fiyat = 0.00016;

function handlePageViewChange() {
	const views = Number(pageViewRange.value) * 1000;
	let earnings = Math.round(views * fiyat);
	if(discount.checked) {
		earnings = (earnings * 12) * 0.75;
	}
	pay.innerText = earnings + ' USD'
}

discount.addEventListener("click", handlePageViewChange)

handlePageViewChange();



(function() {
  function handleSlideChange() {
    const min = Number(this.min);
    const max = this.max === '' ? 100 : Number(this.max);
    const val = Number(this.value);
    const perc = (val - min) / (max - min) * 100;
    this.style.setProperty('--val',  perc + '%');
  }
  document.querySelectorAll('.slider').forEach(sliderElement => {
    sliderElement.addEventListener('input', handleSlideChange);
    sliderElement.dispatchEvent(new Event('input'));
  });
}());