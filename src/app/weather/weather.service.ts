import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs'
import { map } from 'rxjs/operators'
import { environment } from '../../environments/environment'
import { ICurrentWeather, ICurrentWeatherData } from '../interfaces'

@Injectable({
  providedIn: 'root'
})

export class WeatherService {

  constructor(private httpClient: HttpClient) { }

  getCurrentWeather(city: string, country: string): Observable<ICurrentWeather> {
    return this.httpClient
    .get<ICurrentWeatherData>(
      `${environment.baseUrl}?q=${city},${country}&appid=${environment.appId}`
    ).pipe(
      map(data =>
        this.transformToICurrentWeather(data)
      )
    )
  }

  private transformToICurrentWeather(data: ICurrentWeatherData): ICurrentWeather {
    return {
      city: data.name,
      country: data.sys.country,
      date: data.dt * 1000,
      image: `http://openweathermap.org/img/w/${data.weather[0].icon}.png`,
      temperature: this.convertKelvinToCelcius(data.main.temp),
      wind: data.wind.speed,
      description: data.weather[0].description
    }
  }

  private convertKelvinToCelcius(kelvin: number): number {
    return kelvin - 273.15
  }

}
