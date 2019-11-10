import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class LineDimension extends ResthopperComponent {

	public guid: string = "d78f026a-0109-4bcc-bf91-d08475711466";
	public name: string = "Line Dimension";
	public category: string = "Display";
	public subCategory: string = "Dimensions";
	public description: string = "Create a distance annotation along a line.";
	public isObsolete: boolean = false;

	public library: string = "Curve Components";

}