import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export class Twist extends ResthopperComponent {

	public guid: string = "9509cb30-d24f-4f55-a5ac-bf0b12a06cfa";
	public name: string = "Twist";
	public category: string = "Transform";
	public subCategory: string = "Morph";
	public description: string = "Deforms objects by twisting them around an axis.";
	public isObsolete: boolean = false;

	public library: string = "Transform Components";

}