import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export class ExtrudeAngled extends ResthopperComponent {

	public guid: string = "ae57e09b-a1e4-4d05-8491-abd232213bc9";
	public name: string = "Extrude Angled";
	public category: string = "Surface";
	public subCategory: string = "Freeform";
	public description: string = "Extrude a planar polyline at angles";
	public isObsolete: boolean = false;

	public library: string = "Curve Components";

}