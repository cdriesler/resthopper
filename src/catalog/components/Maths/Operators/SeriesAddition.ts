import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export class SeriesAddition extends ResthopperComponent {

	public guid: string = "586706a8-109b-43ec-b581-743e920c951a";
	public name: string = "Series Addition";
	public category: string = "Maths";
	public subCategory: string = "Operators";
	public description: string = "Perform serial addition until a goal has been reached";
	public isObsolete: boolean = false;

	public library: string = "Math Components";

}