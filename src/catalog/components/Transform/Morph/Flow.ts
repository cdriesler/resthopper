import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export class Flow extends ResthopperComponent {

	public guid: string = "c3249da4-3f8e-4400-833e-e4e984d28657";
	public name: string = "Flow";
	public category: string = "Transform";
	public subCategory: string = "Morph";
	public description: string = "Re-aligns objects from a base curve to a target curve.";
	public isObsolete: boolean = false;

	public library: string = "Transform Components";

}