import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export class Absolute extends ResthopperComponent {

	public guid: string = "28124995-cf99-4298-b6f4-c75a8e379f18";
	public name: string = "Absolute";
	public category: string = "Maths";
	public subCategory: string = "Operators";
	public description: string = "Compute the absolute of a value.";
	public isObsolete: boolean = false;

	public library: string = "Math Components";

}