import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export class SumSurface extends ResthopperComponent {

	public guid: string = "5e33c760-adcd-4235-b1dd-05cf72eb7a38";
	public name: string = "Sum Surface";
	public category: string = "Surface";
	public subCategory: string = "Freeform";
	public description: string = "Create a sum surface from two edge curves.";
	public isObsolete: boolean = false;

	public library: string = "Surface Components";

}