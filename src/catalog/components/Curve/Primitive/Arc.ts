import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export class Arc extends ResthopperComponent {

	public guid: string = "bb59bffc-f54c-4682-9778-f6c3fe74fce3";
	public name: string = "Arc";
	public category: string = "Curve";
	public subCategory: string = "Primitive";
	public description: string = "Create an arc defined by base plane, radius and angle domain.";
	public isObsolete: boolean = false;

	public library: string = "Curve Components";

}