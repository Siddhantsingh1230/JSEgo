// Debouncing and Throttling
// `Debouncing` and `Throttling` are techniques used to control the rate at which a function is executed in response to events. These techniques are particularly useful in improving performance and user experience by limiting the number of times a function runs within a certain period.

// Let's discuss a scenario where you need to implement search keyword suggestions based on user input in a text box.
// You might consider using the `onchange` or "keydown" event to trigger an API call on each keystroke. However, this approach is not optimal.
// Why? Because making an API call on every keystroke can result in a large number of unnecessary calls with incomplete parameters.

// For example, if a user is searching for "Naruto Shirts":
// - N  ==> API call
// - Na ==> API call
// - Nar ==> API call
// - Naru ==> API call
// - Narut ==> API call
// - Naruto ==> API call
// This sequence of calls doesn't make sense and can be inefficient. To address this issue, we can defer the API call for a few milliseconds
// So in such cases `debouncing` and `throttling` should be used

// Debouncing
// Debouncing ensures that a function is only executed after a specified period of inactivity. If the event is triggered again within that period, the timer resets and no call is made, the call will only be made if the timer is completed.
// examples where to use debouncing
// • Search Input: Waiting until the user has finished typing before making an API call to fetch search results.
// • Multiple button Clicks: Waiting until the user has finished clicking before making an API call.
// • Window Resizing: Waiting until the user has finished resizing the window before recalculating layout or dimensions.

// Throttling
// Throttling ensures that a function is executed at most once in a specified period, regardless of how many times the event is triggered.

// examples where to use debouncing
// • Scrolling: Updating the scroll position or performing animations at regular intervals while the user is scrolling.
// • Rate-Limiting API Calls: Ensuring that API calls are not made more than once per second, regardless of how many times the user action occurs.

// let's understand debouncing and throttling by an example
// Run `DebouncingAndThrottling.html`

// global variables
const undebouncedTextbox = document.getElementById(`undebouncedTextBox`);
const debouncedTextbox = document.getElementById(`debouncedTextBox`);
const unthrottledContainer = document.getElementById(`unthrottledContainer`);
const throttledContainer = document.getElementById(`throttledContainer`);

const getSuggestions = (searchParam, containerID) => {
  let pTag = document.createElement("p");
  document
    .getElementById(containerID)
    .append(`API call - ${searchParam}`, pTag);
};

undebouncedTextbox.addEventListener("keyup", (e) => {
  getSuggestions(e.target.value, "undebouncedAPIStack");
});

// Debouncing logic
const debounce = (callback, delay) => {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      callback(args[0], args[1]); // args[0] is the input search string and args[1] is the containerID
    }, delay);
  };
};
debouncedSuggestions = debounce(getSuggestions, 350);

debouncedTextbox.addEventListener("keyup", (e) => {
  debouncedSuggestions(e.target.value, "debouncedAPIStack");
});

// Scroll API Calls
// dataFetchCount to maintain how many times the data fetch is called
let datafetchCount = {
  count: 0,
};
const getDataOnScroll = (containerID, apiFetchObject) => {
  apiFetchObject = { count: apiFetchObject.count++ };
  let pTag = document.createElement("p");
  document
    .getElementById(containerID)
    .append(`Data fetch ${apiFetchObject.count}`, pTag);
};

unthrottledContainer.addEventListener("scroll", (e) => {
  getDataOnScroll(e.target.id, datafetchCount);
});

const throttle = (callback, delay) => {
  let lastCallTime = 0;
  return (...args) => {
    const now = new Date().getTime();
    if (now - lastCallTime >= delay) {
      lastCallTime = now;
      callback(args[0], args[1]); // args[0] is the containerId
    }
  };
};

throttledCall = throttle(getDataOnScroll, 350);

let throttledDataFetchCount = {
  count: 0,
};
throttledContainer.addEventListener("scroll", (e) => {
  throttledCall(e.target.id, throttledDataFetchCount);
});
