function mergeIntervals() {
    const intervalsInput = document.getElementById('intervalsInput').value.trim();
  
    try {
      const intervals = JSON.parse(intervalsInput);
      const mergedIntervals = mergeOverlapping(intervals);
      displayResult(mergedIntervals);
    } catch (error) {
      alert('Invalid input. Please enter intervals in the correct format.');
    }
  }
  
  function mergeOverlapping(intervals) {
    intervals.sort((a, b) => a[0] - b[0]);
  
    const mergedIntervals = [];
    let currentInterval = intervals[0];
  
    for (let i = 1; i < intervals.length; i++) {
      const nextInterval = intervals[i];
  
      if (currentInterval[1] >= nextInterval[0]) {
        // Merge overlapping intervals
        currentInterval[1] = Math.max(currentInterval[1], nextInterval[1]);
      } else {
        // Non-overlapping interval found
        mergedIntervals.push([...currentInterval]);
        currentInterval = nextInterval;
      }
    }
  
    // Add the last interval
    mergedIntervals.push([...currentInterval]);
  
    return mergedIntervals;
  }
  
  function displayResult(result) {
    const outputDiv = document.getElementById('output');
    outputDiv.innerHTML = '<h3>Merged Intervals:</h3>';
    outputDiv.innerHTML += JSON.stringify(result);
  };
  console.log('');
  