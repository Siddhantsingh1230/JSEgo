// Here We will be learning many aspects of Event Handling in JavaScript
// Events - Events are stimulus or actions that occur in the system or an interface like a button click
// An event can be defined as changing the state of an object or behavior by performing some actions

// Important Aspects in Events
// • Event propogation - Event propogation means the flow of event movement inside the dom after the point of event trigger it is of two type
// • Event bubbling
// Event bubbling describes how the browser handles events targeted at nested elements.
// When an event occurs in a nested element then that event bubbles up to the parent element so = if the parent element has by chance have registered the  listener for same event then that listener will get triggered this process id called Event bubbling
// In layman terms if the event moves/propogated upward in heirarchy then it is called event bubbling
// To Avoid Event bubbling we write some JS code to prevent the event from reaching the parent
// event.stopPropagation()

// • Event capturing
// Event Capturing is just opposite of event bubbling ,unlike event bubbling the event  moves/propogated down the heirarchy to most nested elements
// That means listener of the top-most parent element will be executed first then the target element's listener will be called
myBtn.addEventListener("click", handleClick, { capture: true });
// or
myBtn.addEventListener("click", handleClick, true);
// last argument is called useCapture which is a boolean value ,by default it's false that means bubbling is happening

// According to W3C, in the scenarios where some-one has used mix of event capturing and bubbling in their parent and child elements then the event capturing cycle occurs first then event bubbling

// • Event Delegation Model
// Event Delegation is based on Event Bubbling
// Event + Delegation => Delegation means to give some-one something or to give someone the control of something
// Similarly Event Delegation model works
// When you want to execute the same function for a particular event across multiple child elements, there's no need to add event listeners to each child individually. Instead, you can add a single event listener to the parent container or element. This technique, known as event delegation, allows the parent container to handle the event and then delegate it to the appropriate child element.

// example

<div id="parent">
  <span class="children">Child 1</span>
  <span class="children">Child 2</span>
  <span class="children">Child 3</span>
</div>;

// Script
document.getElementById("parent").addEventListener("click", (e) => {
  console.log(e.target.textContent);
});

// Now whenever we click on child 1
// the output is
// Child 1
// Now whenever we click on child 2
// the output is
// Child 2
// Now whenever we click on child 3
// the output is
// Child 3

// This occurs due to event bubbling. When an event is triggered on a target element, it bubbles up through the DOM to its parent element. The event listener on the parent element is invoked during this process and hence the above outputs got printed.
// Event Delegation model gives a reusable way of using and creating behaviours based on events 

// Let's Talk about the limitations of Event Delegation Model
// •  Not All Events are bubbled up for example blur,focus and scroll cannot be delegated
// •  Needs extra code and logic in nested elements to identify and run different logic for same event down the heirarchy
// •  event.stopPropogation() in child element can prevent the delegation to work for that element