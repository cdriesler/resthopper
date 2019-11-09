import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export class FilletEdge extends ResthopperComponent {

	public guid: string = "4b87eb13-f87c-4ff1-ae0e-6c9f1f2aecbd";
	public name: string = "Fillet Edge";
	public category: string = "Surface";
	public subCategory: string = "Util";
	public description: string = "Fillet some edges of a brep.";
	public isObsolete: boolean = false;

	public library: string = "Curve Components";

}