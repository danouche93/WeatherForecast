import { CityLinks } from "./cityLinks.model";
import { Image } from "./image.model";
import { Location } from "./location.model"

export class City{
    matching_alternate_names: string[];
    matching_full_name: string;
    _links: CityLinks;
    image: Image;
    localTime: Date;
    location: Location;
}