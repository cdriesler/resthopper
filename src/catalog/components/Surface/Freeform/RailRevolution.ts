import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export class RailRevolution extends ResthopperComponent {

	public guid: string = "d8d68c35-f869-486d-adf3-69ee3cc2d501";
	public name: string = "Rail Revolution";
	public category: string = "Surface";
	public subCategory: string = "Freeform";
	public description: string = "Create a surface of revolution using a sweep rail.";
	public isObsolete: boolean = false;

	public library: string = "Surface Components";

}