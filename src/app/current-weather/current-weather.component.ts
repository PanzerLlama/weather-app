import { Component, Input, OnInit } from '@angular/core'
import { ICurrentWeather } from '../interfaces'
import { WeatherService } from '../weather/weather.service'

@Component({
  selector: 'app-current-weather',
  templateUrl: './current-weather.component.html',
  styleUrls: ['./current-weather.component.css']
})

export class CurrentWeatherComponent implements OnInit {

  @Input('name') name: string
  @Input('country') country: string

  current: ICurrentWeather
  constructor(private weatherService: WeatherService) {}

  ngOnInit() {
    console.log(this.name)
    this.weatherService.getCurrentWeather(this.name, this.country)
      .subscribe((data) => this.current = data)
  }
}

