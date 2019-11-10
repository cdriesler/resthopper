import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class LargerThan extends ResthopperComponent {

	public guid: string = "30d58600-1aab-42db-80a3-f1ea6c4269a0";
	public name: string = "Larger Than";
	public category: string = "Maths";
	public subCategory: string = "Operators";
	public description: string = "Larger than (or equal to)";
	public isObsolete: boolean = false;

	public library: string = "Math Components";

}