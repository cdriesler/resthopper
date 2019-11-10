import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class Degrees extends ResthopperComponent {

	public guid: string = "0d77c51e-584f-44e8-aed2-c2ddf4803888";
	public name: string = "Degrees";
	public category: string = "Maths";
	public subCategory: string = "Trig";
	public description: string = "Convert an angle specified in radians to degrees";
	public isObsolete: boolean = false;

	public library: string = "Math Components";

}