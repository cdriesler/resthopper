import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export class CircleTanTan extends ResthopperComponent {

	public guid: string = "50b204ef-d3de-41bb-a006-02fba2d3f709";
	public name: string = "Circle TanTan";
	public category: string = "Curve";
	public subCategory: string = "Primitive";
	public description: string = "Create a circle tangent to two curves.";
	public isObsolete: boolean = false;

	public library: string = "Curve Components";

}