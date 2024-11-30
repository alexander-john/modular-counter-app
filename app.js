// A "component" to render the counter
function CounterComponent(initialValue = 0) {
    let count = initialValue;
  
    // Create DOM structure
    const container = document.createElement('div');
    container.style.textAlign = 'center';
  
    const counterDisplay = document.createElement('div');
    counterDisplay.className = 'counter';
    counterDisplay.textContent = count;
  
    const incrementButton = document.createElement('button');
    incrementButton.textContent = 'Increment';
    incrementButton.addEventListener('click', () => {
      count++;
      counterDisplay.textContent = count;
    });
  
    const decrementButton = document.createElement('button');
    decrementButton.textContent = 'Decrement';
    decrementButton.addEventListener('click', () => {
      count--;
      counterDisplay.textContent = count;
    });
  
    const resetButton = document.createElement('button');
    resetButton.textContent = 'Reset';
    resetButton.addEventListener('click', () => {
      count = 0;
      counterDisplay.textContent = count;
    });
  
    // Append elements
    container.appendChild(counterDisplay);
    container.appendChild(incrementButton);
    container.appendChild(decrementButton);
    container.appendChild(resetButton);
  
    return container;
  }
  
  // Render the "CounterComponent" into the app
  const app = document.getElementById('app');
  app.appendChild(CounterComponent());