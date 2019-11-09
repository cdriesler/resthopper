import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export class Maximum extends ResthopperComponent {

	public guid: string = "0d1e2027-f153-460d-84c0-f9af431b08cb";
	public name: string = "Maximum";
	public category: string = "Maths";
	public subCategory: string = "Util";
	public description: string = "Return the greater of two items.";
	public isObsolete: boolean = false;

	public library: string = "Math Components";

}