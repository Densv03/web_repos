import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { MapPointsService } from "./core/services/map-points.service";
import { Observable } from "rxjs";
import { MapPoint } from "./core/models/map-point";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements OnInit {
  public startPosition = this.mapPointsService.getStartPosition();
  public selectedMapPoint: number | null = null;
  public currentZoom = 4;
  public filterText: string = ''

  public get mapPoints$(): Observable<MapPoint[]> {
    return this.mapPointsService.getMapPoints();
  }

  constructor(private mapPointsService: MapPointsService) {
  }

  ngOnInit() {
  }

  public markerClick(id: number): void {
    this.selectedMapPoint = id - 1;
  }

  public mapPointItemClick(id: number): void {
    const currentMapPoint = this.mapPointsService.getMapPointById(id);

    this.selectedMapPoint = id - 1;

    if (currentMapPoint) {
      this.startPosition = {longitude: currentMapPoint.longitude, latitude: currentMapPoint.latitude};
    }
  }
}
