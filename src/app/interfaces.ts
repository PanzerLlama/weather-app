export interface ICurrentWeather {
  city: string
  country: string
  date: number
  image: string
  temperature: number
  wind: number
  description: string
}

export interface ICurrentWeatherData {
  weather: [{
    description: string,
    icon: string
  }],
  wind: {
    speed: number
  },
  main: {
    temp: number
  },
  sys: {
    country: string
  },
  dt: number,
  name: string
}
