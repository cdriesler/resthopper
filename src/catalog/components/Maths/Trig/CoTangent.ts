import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export class CoTangent extends ResthopperComponent {

	public guid: string = "1f602c33-f38e-4f47-898b-359f0a4de3c2";
	public name: string = "CoTangent";
	public category: string = "Maths";
	public subCategory: string = "Trig";
	public description: string = "Compute the co-tangent (reciprocal of the Tangent) of an angle.";
	public isObsolete: boolean = false;

	public library: string = "Math Components";

}