import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export class Fillet extends ResthopperComponent {

	public guid: string = "c92cdfc8-3df8-4c4e-abc1-ede092a0aa8a";
	public name: string = "Fillet";
	public category: string = "Curve";
	public subCategory: string = "Util";
	public description: string = "Fillet a curve at a parameter.";
	public isObsolete: boolean = false;

	public library: string = "Curve Components";

}