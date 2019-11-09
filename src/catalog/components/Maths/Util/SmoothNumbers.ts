import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export class SmoothNumbers extends ResthopperComponent {

	public guid: string = "5b424e1c-d061-43cd-8c20-db84564b0502";
	public name: string = "Smooth Numbers";
	public category: string = "Maths";
	public subCategory: string = "Util";
	public description: string = "Smooth out changing numbers over time";
	public isObsolete: boolean = false;

	public library: string = "Grasshopper";

}