declare namespace BMap{

    export class Point{
        constructor(lng:number,lat:number)
        lng: number;
        lat: number;
        equals(other:Point):boolean
    }
    interface MapOptions{
        minZoom:number
        maxZoom:number
        mapType:string
        enableHighResolution:boolean
    }

    export class Map{
        constructor(container:string|HTMLElement, opts?:MapOptions)
        centerAndZoom(point:Point, zoom:number):void
    }

    interface RenderOptions{
        map:Map
        panel:string|HTMLElement
        selectFirstResult:boolean
        autoViewport:boolean
        highlightMode:any // 先这样
    }
    interface LocalCityOptions{
        renderOptions:RenderOptions
    }
    interface LocalCityResult{
        center: Point;
        level: number;
        name: string;
    }
    export class LocalCity{
        constructor(opts?:LocalCityOptions)
        get(callback:(result:LocalCityResult)=>void):void
    }

    interface AddressComponent{
        streetNumber: number;
        street: number;
        district: number;
        city: number;
        province: number;
    }
    interface LocationOptions{
        poiRadius:number
        numPois:number
    }
    interface GeocoderResult{
        point: Point;
        address: string;
        addressComponents: AddressComponent;
    }

    export class Geocoder{
        constructor()
        getPoint(address:string, callback:(point:Point|null)=>void, ctiy:string):void
        getLocation(point:Point,callback:(result:GeocoderResult)=>void, options?:LocationOptions):void
    }
}



