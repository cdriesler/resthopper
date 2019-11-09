import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export class VectorLength extends ResthopperComponent {

	public guid: string = "675e31bf-1775-48d7-bb8d-76b77786dd53";
	public name: string = "Vector Length";
	public category: string = "Vector";
	public subCategory: string = "Vector";
	public description: string = "Compute the length (amplitude) of a vector.";
	public isObsolete: boolean = false;

	public library: string = "Vector Components";

}