import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export class ArcTangent extends ResthopperComponent {

	public guid: string = "b4647919-d041-419e-99f5-fa0dc0ddb8b6";
	public name: string = "ArcTangent";
	public category: string = "Maths";
	public subCategory: string = "Trig";
	public description: string = "Compute the angle whose tangent is the specified value.";
	public isObsolete: boolean = false;

	public library: string = "Math Components";

}