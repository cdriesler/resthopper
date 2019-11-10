import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class Extremes extends ResthopperComponent {

	public guid: string = "37084b3f-2b66-4f3a-9737-80d0b0b7f0cb";
	public name: string = "Extremes";
	public category: string = "Maths";
	public subCategory: string = "Util";
	public description: string = "Find the extremes in a list of values";
	public isObsolete: boolean = false;

	public library: string = "Math Components";

}