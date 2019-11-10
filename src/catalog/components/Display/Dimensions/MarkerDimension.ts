import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class MarkerDimension extends ResthopperComponent {

	public guid: string = "c5208969-16f9-48af-8a86-e500c033fb76";
	public name: string = "Marker Dimension";
	public category: string = "Display";
	public subCategory: string = "Dimensions";
	public description: string = "Create a text annotation at a point";
	public isObsolete: boolean = false;

	public library: string = "Curve Components";

}