import { Injectable } from '@angular/core';
import { MapPoint } from "../models/map-point";
import { BehaviorSubject, Observable } from "rxjs";
import { MAP_POINTS } from "../constants/map-points";

@Injectable({
    providedIn: 'root'
})
export class MapPointsService {

    private mapPointsSource: BehaviorSubject<MapPoint[]> = new BehaviorSubject<MapPoint[]>(MAP_POINTS);

    constructor() {
    }

    public getMapPoints(): Observable<MapPoint[]> {
        return this.mapPointsSource.asObservable();
    }

    public getStartPosition(): { longitude: number, latitude: number } {
        const mapPointsLength = this.mapPointsSource.getValue().length;

        const longitude = this.mapPointsSource.getValue().reduce((acc: number, value: MapPoint) => {
            acc += value.longitude
            return acc;
        }, 0) / mapPointsLength;
        const latitude = this.mapPointsSource.getValue().reduce((acc: number, value: MapPoint) => {
            acc += value.latitude
            return acc;
        }, 0) / mapPointsLength;

        return {latitude, longitude};
    }

    public getMapPointById(id: number): MapPoint | undefined {
        return this.mapPointsSource.getValue().find(mapPoint => mapPoint.id === id);
    }
}

