import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export class RelativeDifferences extends ResthopperComponent {

	public guid: string = "dd17d442-3776-40b3-ad5b-5e188b56bd4c";
	public name: string = "Relative Differences";
	public category: string = "Maths";
	public subCategory: string = "Operators";
	public description: string = "Compute relative differences for a list of data";
	public isObsolete: boolean = false;

	public library: string = "Math Components";

}