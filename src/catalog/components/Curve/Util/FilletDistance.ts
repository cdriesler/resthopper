import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class FilletDistance extends ResthopperComponent {

	public guid: string = "6fb21315-a032-400e-a80f-248687f5507f";
	public name: string = "Fillet Distance";
	public category: string = "Curve";
	public subCategory: string = "Util";
	public description: string = "Fillet the sharp corners of a curve by distance.";
	public isObsolete: boolean = false;

	public library: string = "Curve Components";

}