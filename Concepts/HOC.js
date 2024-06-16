// HOC Stands for Higher Order Component this concept is greatly linked to React but here we will be learning about HOF
// HOC has a quite resemblance to HOF - Higher Order Functions

// Higher Order Functions
// In layman terms When a function can be treated as variables and can be passed to another functions as an argument or even can be returned then the accepting function is called a Higher Order function
// HOF is any function that does any of the following
// Accept other functions as arguments.
// Return a function as a result.

// examples of HOF
// .map()
// .filter()
// .forEach()
// .reduce()

// Similarly In React HOC are those components that can take any other components as Prop or return the Component as result/output

// React.example

const OtherComponent = () => {
  return <div>JSEgo</div>;
};

const JSComponet = ({ OtherComponent }) => {
  return <OtherComponent />;
};

<JSComponet OtherComponent={OtherComponent} />;
