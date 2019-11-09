import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export class Explode extends ResthopperComponent {

	public guid: string = "afb96615-c59a-45c9-9cac-e27acb1c7ca0";
	public name: string = "Explode";
	public category: string = "Curve";
	public subCategory: string = "Util";
	public description: string = "Explode a curve into smaller segments.";
	public isObsolete: boolean = false;

	public library: string = "Curve Components";

}