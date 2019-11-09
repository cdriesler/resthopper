import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export class PointPolar extends ResthopperComponent {

	public guid: string = "a435f5c8-28a2-43e8-a52a-0b6e73c2e300";
	public name: string = "Point Polar";
	public category: string = "Vector";
	public subCategory: string = "Point";
	public description: string = "Create a point from polar {phi,theta,offset} coordinates.";
	public isObsolete: boolean = false;

	public library: string = "Vector Components";

}