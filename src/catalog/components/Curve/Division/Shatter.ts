import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export class Shatter extends ResthopperComponent {

	public guid: string = "2ad2a4d4-3de1-42f6-a4b8-f71835f35710";
	public name: string = "Shatter";
	public category: string = "Curve";
	public subCategory: string = "Division";
	public description: string = "Shatter a curve into segments.";
	public isObsolete: boolean = false;

	public library: string = "Curve Components";

}