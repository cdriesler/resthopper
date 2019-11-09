import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export class Seam extends ResthopperComponent {

	public guid: string = "42ad8dc1-b0c0-40df-91f5-2c46e589e6c2";
	public name: string = "Seam";
	public category: string = "Curve";
	public subCategory: string = "Util";
	public description: string = "Adjust the seam of a closed curve.";
	public isObsolete: boolean = false;

	public library: string = "Curve Components";

}