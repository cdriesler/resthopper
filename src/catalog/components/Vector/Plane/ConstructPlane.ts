import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class ConstructPlane extends ResthopperComponent {

	public guid: string = "bc3e379e-7206-4e7b-b63a-ff61f4b38a3e";
	public name: string = "Construct Plane";
	public category: string = "Vector";
	public subCategory: string = "Plane";
	public description: string = "Construct a plane from an origin point and {x}, {y} axes.";
	public isObsolete: boolean = false;

	public library: string = "Vector Components";

}