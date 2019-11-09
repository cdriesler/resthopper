import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export class RotateAxis extends ResthopperComponent {

	public guid: string = "3ac8e589-37f5-477d-aa61-6699702c5728";
	public name: string = "Rotate Axis";
	public category: string = "Transform";
	public subCategory: string = "Euclidean";
	public description: string = "Rotate an object around an axis.";
	public isObsolete: boolean = false;

	public library: string = "Transform Components";

}