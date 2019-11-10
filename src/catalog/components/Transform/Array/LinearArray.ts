import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class LinearArray extends ResthopperComponent {

	public guid: string = "e87db220-a0a0-4d67-a405-f97fd14b2d7a";
	public name: string = "Linear Array";
	public category: string = "Transform";
	public subCategory: string = "Array";
	public description: string = "Create a linear array of geometry.";
	public isObsolete: boolean = false;

	public library: string = "Transform Components";

}