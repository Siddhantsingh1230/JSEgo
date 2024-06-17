// Fetch Api provides an interface to make network requests or fetch any response from a server.
// Takes one mandatory argument , A string containing the path of resource (URL)
// Fetch returns a promise containing the Response object which contains body ,headers,statusCode etc
// This `body` key in the response object contains `ReadableStream` which must be converted to JSON to get the actual data
// The `Response` object includes a `.json()` method that converts the `ReadableStream` into a JSON object. This method returns a promise that resolves to the parsed JSON data.

// Example
const getMyGHubStats = async () => {
  const res = await fetch("https://api.github.com/users/siddhantsingh1230");
  // console.log(typeof res) //object
  const actuaLResponse = await res.json();
  console.log(actuaLResponse); // actual resource data
  // another way to do the same is by using fetch chaining
  fetch("https://api.github.com/users/siddhantsingh1230")
    .then((res) => res.json())
    .then((data) => console.log(data));
};

getMyGHubStats();
