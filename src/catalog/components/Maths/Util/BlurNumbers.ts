import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export class BlurNumbers extends ResthopperComponent {

	public guid: string = "57e1d392-e3fb-4de9-be98-982854a92351";
	public name: string = "Blur Numbers";
	public category: string = "Maths";
	public subCategory: string = "Util";
	public description: string = "Blur a list of numbers by averaging neighbours";
	public isObsolete: boolean = false;

	public library: string = "Math Components";

}