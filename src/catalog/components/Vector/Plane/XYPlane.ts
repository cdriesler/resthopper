import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export class XYPlane extends ResthopperComponent {

	public guid: string = "17b7152b-d30d-4d50-b9ef-c9fe25576fc2";
	public name: string = "XY Plane";
	public category: string = "Vector";
	public subCategory: string = "Plane";
	public description: string = "World XY plane.";
	public isObsolete: boolean = false;

	public library: string = "Vector Components";

}