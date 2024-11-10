const add = (a: number, b: number) => {
  return a + b;
}

const subtract = (a: number, b: number): number => {
  return a - b;
}

function divide(a: number, b: number) : number {
  return a / b;
}

const multiply = function(a: number, b: number) : number {
  return a * b;
}

const logger = (message: string): void => {
  console.log(message);
}
// void 는 Null, undefined 반환 가능

const throwError = (message: string): string => {
  if (!message) {
    throw new Error(message);
  }
  return message;
}
// never 함수 끝에 절대 도달하지 않는다, coner case

const forecast = {
  date: new Date(),
  weather: 'sunny'
};

// ES2015
const logWeather = ({date, weather}) => {
  console.log(date);
  console.log(weather);
}

logWeather(forecast);
