import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export class AdjustPlane extends ResthopperComponent {

	public guid: string = "9ce34996-d8c6-40d3-b442-1a7c8c093614";
	public name: string = "Adjust Plane";
	public category: string = "Vector";
	public subCategory: string = "Plane";
	public description: string = "Adjust a plane to match a new normal direction";
	public isObsolete: boolean = false;

	public library: string = "Vector Components";

}