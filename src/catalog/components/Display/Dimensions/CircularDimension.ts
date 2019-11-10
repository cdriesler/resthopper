import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class CircularDimension extends ResthopperComponent {

	public guid: string = "7e9489e0-122d-401a-aba8-f1dae0217c40";
	public name: string = "Circular Dimension";
	public category: string = "Display";
	public subCategory: string = "Dimensions";
	public description: string = "Create an angle annotation projected to a circle.";
	public isObsolete: boolean = false;

	public library: string = "Curve Components";

}