import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export class PointOriented extends ResthopperComponent {

	public guid: string = "aa333235-5922-424c-9002-1e0b866a854b";
	public name: string = "Point Oriented";
	public category: string = "Vector";
	public subCategory: string = "Point";
	public description: string = "Create a point from plane {u,v,w} coordinates.";
	public isObsolete: boolean = false;

	public library: string = "Vector Components";

}