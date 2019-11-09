import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export class MakeTwoDRhinoView extends ResthopperComponent {

	public guid: string = "4ac24770-e38b-4363-be38-551a3b134707";
	public name: string = "Make2D Rhino View";
	public category: string = "Display";
	public subCategory: string = "Dimensions";
	public description: string = "Import a Rhino view for a Make2D solution";
	public isObsolete: boolean = false;

	public library: string = "Curve Components";

}