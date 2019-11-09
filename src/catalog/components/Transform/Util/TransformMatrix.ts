import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export class TransformMatrix extends ResthopperComponent {

	public guid: string = "93c24899-f456-4785-84f2-314958b9347b";
	public name: string = "Transform Matrix";
	public category: string = "Transform";
	public subCategory: string = "Util";
	public description: string = "A 4x4 Transformation matrix";
	public isObsolete: boolean = false;

	public library: string = "Transform Components";

}