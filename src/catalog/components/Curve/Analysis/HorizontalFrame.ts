import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export class HorizontalFrame extends ResthopperComponent {

	public guid: string = "c048ad76-ffcd-43b1-a007-4dd1b2373326";
	public name: string = "Horizontal Frame";
	public category: string = "Curve";
	public subCategory: string = "Analysis";
	public description: string = "Get a horizontally aligned frame along a curve at a specified parameter.";
	public isObsolete: boolean = false;

	public library: string = "Vector Components";

}