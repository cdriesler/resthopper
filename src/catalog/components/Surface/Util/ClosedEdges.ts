import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export class ClosedEdges extends ResthopperComponent {

	public guid: string = "70905be1-e22f-4fa8-b9ae-e119d417904f";
	public name: string = "Closed Edges";
	public category: string = "Surface";
	public subCategory: string = "Util";
	public description: string = "Select closed edges.";
	public isObsolete: boolean = false;

	public library: string = "Curve Components";

}