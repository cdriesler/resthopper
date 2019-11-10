import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class DivideLength extends ResthopperComponent {

	public guid: string = "fdc466a9-d3b8-4056-852a-09dba0f74aca";
	public name: string = "Divide Length";
	public category: string = "Curve";
	public subCategory: string = "Division";
	public description: string = "Divide a curve into segments with a preset length";
	public isObsolete: boolean = false;

	public library: string = "Vector Components";

}