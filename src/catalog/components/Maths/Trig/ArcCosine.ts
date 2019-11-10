import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class ArcCosine extends ResthopperComponent {

	public guid: string = "49584390-d541-41f7-b5f6-1f9515ac0f73";
	public name: string = "ArcCosine";
	public category: string = "Maths";
	public subCategory: string = "Trig";
	public description: string = "Compute the angle whose cosine is the specified value.";
	public isObsolete: boolean = false;

	public library: string = "Math Components";

}