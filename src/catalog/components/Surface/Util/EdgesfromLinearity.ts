import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class EdgesfromLinearity extends ResthopperComponent {

	public guid: string = "e4ff8101-73c9-4802-8c5d-704d8721b909";
	public name: string = "Edges from Linearity";
	public category: string = "Surface";
	public subCategory: string = "Util";
	public description: string = "Select brep edges based on linearity";
	public isObsolete: boolean = false;

	public library: string = "Curve Components";

}