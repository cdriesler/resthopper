import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class Circumcentre extends ResthopperComponent {

	public guid: string = "21d0767c-5340-4087-aa09-398d0e706908";
	public name: string = "Circumcentre";
	public category: string = "Maths";
	public subCategory: string = "Trig";
	public description: string = "Generate the triangle circumcentre from perpendicular bisectors.";
	public isObsolete: boolean = false;

	public library: string = "Transform Components";

}