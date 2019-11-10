import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class LinearDimension extends ResthopperComponent {

	public guid: string = "5018bf8d-8566-4917-a6e3-5a623bda8079";
	public name: string = "Linear Dimension";
	public category: string = "Display";
	public subCategory: string = "Dimensions";
	public description: string = "Create a distance annotation between points, projected to a line.";
	public isObsolete: boolean = false;

	public library: string = "Curve Components";

}