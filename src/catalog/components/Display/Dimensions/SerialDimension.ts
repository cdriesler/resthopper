import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export class SerialDimension extends ResthopperComponent {

	public guid: string = "7dd42002-75bb-4f41-857f-472a140b3b28";
	public name: string = "Serial Dimension";
	public category: string = "Display";
	public subCategory: string = "Dimensions";
	public description: string = "Create a distance annotation between multiple points, projected to a line.";
	public isObsolete: boolean = false;

	public library: string = "Curve Components";

}