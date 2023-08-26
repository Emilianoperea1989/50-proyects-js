const slider = document.getElementById('slider');
const sliderValue = document.getElementById('slider-value');


const initialValue = slider.value;
sliderValue.textContent = initialValue;

const initialNormalizedValue = (initialValue - slider.min) / (slider.max - slider.min);
const initialBackgroundColor = `rgb(${255 - initialNormalizedValue * 255}, ${255 - initialNormalizedValue * 255}, ${255 - initialNormalizedValue * 255})`;
document.body.style.backgroundColor = initialBackgroundColor;

slider.addEventListener('input', (event) => {
  const value = event.target.value;
  sliderValue.textContent = value;

  const normalizedValue = (value - slider.min) / (slider.max - slider.min);
  const backgroundColor = `rgb(${255 - normalizedValue * 255}, ${255 - normalizedValue * 255}, ${255 - normalizedValue * 255})`;

  document.body.style.backgroundColor = backgroundColor;

  const textColor = `rgb(${normalizedValue * 255}, ${normalizedValue * 255}, ${normalizedValue * 255})`;
  sliderValue.style.color = textColor;
});
