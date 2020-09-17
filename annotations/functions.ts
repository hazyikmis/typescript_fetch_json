const add: (a: number, b: number) => number = (a: number, b: number) => {
  return a + b;
};

function add0(a: number, b: number): number {
  return a + b;
}

const add00 = function (a: number, b: number): number {
  return a + b;
};

//shorter
const add2 = (a: number, b: number): number => {
  return a + b;
};

//with type inference - but its better to use return annotations like below rather than like 2 line below
//const add3 = (a: number, b: number): number => {
const add3 = (a: number, b: number) => {
  return a + b;
};

//with type inference - but its better to use return annotations like below rather than like 2 line below
//const add4 = (a: number, b: number): string => {
const add4 = (a: number, b: number) => {
  return (a + b).toString();
};

//with type inference - but its better to use return annotations like below rather than like 2 line below
//const add5 = (a: number, b: number): string | number => {
const add5 = (a: number, b: number) => {
  let sum = a + b;
  return sum > 10 ? sum.toString() : sum;
};

//this function returns nothing and never reach the end of the function and exit early without returning anything
const throwError = (message: string): never => {
  throw new Error(message);
};

//if this is the case: returning type should be string
const throwError2 = (message: string): string => {
  if (!message) {
    throw new Error('....');
  }
  return message;
};

//if this is the case: returning type should be void
const throwError3 = (message: string): void => {
  if (!message) {
    throw new Error('....');
  }
};

//Destructuring

const todaysWeather = {
  date: new Date(),
  weather: 'sunny',
};

const logWeather = (forecast): void => {
  console.log(forecast.date);
  console.log(forecast.weather);
};
const logWeather2 = (forecast: { date: Date; weather: string }): void => {
  console.log(forecast.date);
  console.log(forecast.weather);
};
const logWeather3 = ({
  date,
  weather,
}: {
  date: Date;
  weather: string;
}): void => {
  console.log(date);
  console.log(weather);
};

logWeather(todaysWeather);
logWeather2(todaysWeather);
logWeather3(todaysWeather);
