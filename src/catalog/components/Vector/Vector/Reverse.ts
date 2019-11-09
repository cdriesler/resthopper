import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export class Reverse extends ResthopperComponent {

	public guid: string = "d5788074-d75d-4021-b1a3-0bf992928584";
	public name: string = "Reverse";
	public category: string = "Vector";
	public subCategory: string = "Vector";
	public description: string = "Reverse a vector (multiply by -1).";
	public isObsolete: boolean = false;

	public library: string = "Vector Components";

}