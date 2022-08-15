import { Pipe, PipeTransform } from '@angular/core';
import { MapPoint } from "../models/map-point";

@Pipe({
    name: 'filter',
    pure: false
})
export class FilterPipe implements PipeTransform {

    transform(items: MapPoint[], filter: string): MapPoint[] {
        return items.filter(mapPoint => !mapPoint.name.toUpperCase().indexOf(filter.toUpperCase()));
    }

}
