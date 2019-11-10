import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class GoldenRatio extends ResthopperComponent {

	public guid: string = "cb22d3ed-93d8-4629-bdf2-c0c7c25afd2c";
	public name: string = "Golden Ratio";
	public category: string = "Maths";
	public subCategory: string = "Util";
	public description: string = "Returns a factor of the golden ratio (Phi).";
	public isObsolete: boolean = false;

	public library: string = "Math Components";

}