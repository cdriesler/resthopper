import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class RectangularArray extends ResthopperComponent {

	public guid: string = "e521f7c8-92f4-481c-888b-eea109e3d6e9";
	public name: string = "Rectangular Array";
	public category: string = "Transform";
	public subCategory: string = "Array";
	public description: string = "Create a rectangular array of geometry.";
	public isObsolete: boolean = false;

	public library: string = "Transform Components";

}