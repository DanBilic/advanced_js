//promise has 3 states: fulfilled , rejected, pending
const promise = new Promise((resolve, reject) => {
  if (true) {
    resolve("Stuff wokred");
  } else {
    reject("Error it broke");
  }
});

const promise2 = new Promise((resolve, reject) => {
  if (true) {
    resolve("Stuff wokred");
  } else {
    reject("Error it broke");
  }
});

//Promise.all gibt ein array zurück dass den Ergebnissen der einzelnen Promises entspricht
//Promise.all wartet biss alle promises resolved sind
Promise.all([promise, promise2]).then((values) => {
  console.log(values);
});

promise.then((result) => console.log(result)); //Stuff worked -> resolved

promise
  .then((result) => result + "!")
  .then((result2) => {
    throw Error;
    console.log(resut2);
  })
  .catch(console.log); //oder .catch(()=> console.log('error!'))

//---------------------------------------------
const urls = [
  "https://jsonplaceholder.typicode.com/users",
  "https://jsonplaceholder.typicode.com/posts",
  "https://jsonplaceholder.typicode.com/albums",
];

Promise.all(
  urls.map((url) => {
    return fetch(url).then((resp) => resp.json());
  })
)
  .then((results) => {
    console.log(results[0]);
    console.log(results[1]);
    console.log(results[2]);
  })
  .catch(() => console.log("error"));

//async await syntax
//async await needs a try and catch block to catch errors, because it has no catch function attached like Promise.all
const getData = async function () {
  try {
    const [users, posts, albums] = await Promise.all(
      urls.map((url) => {
        return fetch(url).then((resp) => resp.json());
      })
    );

    console.log(users);
    console.log(posts);
    console.log(albums);
  } catch (error) {
    console.log("error");
  }
};

//ES9 finally

Promise.all(
  urls.map((url) => {
    return fetch(url).then((resp) => resp.json());
  })
)
  .then((results) => {
    console.log(results[0]);
    console.log(results[1]);
    console.log(results[2]);
  })
  .catch(() => console.log("error"))
  //weather or not the promise rejects or resolves the finllay function willr run
  //finally does not get any paramter
  .finally(() => console.log("i run always"));

//for await of feature
const urls = [
  "https://jsonplaceholder.typicode.com/users",
  "https://jsonplaceholder.typicode.com/posts",
  "https://jsonplaceholder.typicode.com/albums",
];

const getData = async function () {
  try {
    const [users, posts, albums] = await Promise.all(
      urls.map((url) => {
        return fetch(url).then((resp) => resp.json());
      })
    );

    console.log(users);
    console.log(posts);
    console.log(albums);
  } catch (error) {
    console.log("error");
  }
};

//for await lopps through promises and awaits them
const getData2 = async function () {
  const arrayOfPromises = urls.map((url) => fecth(url));
  for await (let request of arrayOfPromises) {
    const data = await request.json();
    console.log(data);
  }
};

//------------------------------------------------------------------------

const promisify = (item, delay) =>
  new Promise((resolve) => setTimeout(() => resolve(item), delay));

const a = () => promisify("a", 100);
const b = () => promisify("b", 5000);
const c = () => promisify("c", 3000);

async function parallel() {
  const promises = [a(), b(), c()];
  const [output1, output2, output3] = await Promise.all(promises);
  return `prallel is done: ${output1} ${output2} ${output3}`;
}

//fastest promise return
async function race() {
  const promises = [a(), b(), c()];
  const output1 = await Promise.race(promises);
  return `race is done: ${output1}`;
}

//autout in a sequence
async function sequence() {
  const output1 = await a();
  const output2 = await b();
  const output3 = await c();
  return `sequence is done ${output1} ${output2} ${output3}`;
}

sequence().then(console.log);
parallel().then(console.log);
race().then(console.log);
