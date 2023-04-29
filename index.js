const regexInput = document.getElementById('regex-input');
const stringInput = document.getElementById('string-input');
const string = stringInput.value;
const flagsSelect = document.getElementById('flags-select');
const functionSelect = document.getElementById('function-select');
const runButton = document.getElementById('run-button');
const result = document.getElementById('result');

runButton.addEventListener('click', () => {
    console.log(stringInput.value);
  const regex = new RegExp(regexInput.value, flagsSelect.value);
  const str = stringInput.value;
  const func = functionSelect.value;

  if (!regexInput.value.trim()) {
    result.innerHTML = 'Please enter a regular expression.';
    return;
  }

  if (!stringInput.value.trim()) {
    result.innerHTML = 'Please enter a string.';
    return;
  }

  let matches;

  switch (func) {
    case 'test':
      matches = regex.test(str);
      result.innerHTML = matches ? 'Match found!' : 'No match found.';
      break;
    case 'search':
      matches = str.search(regex);
      result.innerHTML = matches !== -1 ? `Match found at index ${matches}.` : 'No match found.';
      break;
    case 'match':
      matches = str.match(regex);
      if (matches) {
        result.innerHTML = 'Match found: ';
        const highlightedStr = str.replace(regex, match => `<mark>${match}</mark>`);
        result.insertAdjacentHTML('beforeend', highlightedStr);
      } else {
        result.innerHTML = 'No match found.';
      }
      break;
  }
});
