import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class CircleFit extends ResthopperComponent {

	public guid: string = "be52336f-a2e1-43b1-b5f5-178ba489508a";
	public name: string = "Circle Fit";
	public category: string = "Curve";
	public subCategory: string = "Primitive";
	public description: string = "Fit a circle to a collection of points.";
	public isObsolete: boolean = false;

	public library: string = "Curve Components";

}