import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export class TensorDisplay extends ResthopperComponent {

	public guid: string = "08619b6d-f9c4-4cb2-adcd-90959f08dc0d";
	public name: string = "Tensor Display";
	public category: string = "Vector";
	public subCategory: string = "Field";
	public description: string = "Display the tensor vectors of a field section";
	public isObsolete: boolean = false;

	public library: string = "Field Components";

}