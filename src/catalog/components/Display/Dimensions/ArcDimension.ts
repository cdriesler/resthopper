import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class ArcDimension extends ResthopperComponent {

	public guid: string = "1bd97813-4fec-4453-9645-4ac920844f9d";
	public name: string = "Arc Dimension";
	public category: string = "Display";
	public subCategory: string = "Dimensions";
	public description: string = "Create an angle annotation based on an arc.";
	public isObsolete: boolean = false;

	public library: string = "Curve Components";

}