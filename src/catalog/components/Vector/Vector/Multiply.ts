import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export class Multiply extends ResthopperComponent {

	public guid: string = "63fff845-7c61-4dfb-ba12-44d481b4bf0f";
	public name: string = "Multiply";
	public category: string = "Vector";
	public subCategory: string = "Vector";
	public description: string = "Perform vector-scalar multiplication.";
	public isObsolete: boolean = false;

	public library: string = "Vector Components";

}