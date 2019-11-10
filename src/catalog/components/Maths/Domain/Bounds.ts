import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class Bounds extends ResthopperComponent {

	public guid: string = "f44b92b0-3b5b-493a-86f4-fd7408c3daf3";
	public name: string = "Bounds";
	public category: string = "Maths";
	public subCategory: string = "Domain";
	public description: string = "Create a numeric domain which encompasses a list of numbers.";
	public isObsolete: boolean = false;

	public library: string = "Math Components";

}