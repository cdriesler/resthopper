import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export class BrepBrep extends ResthopperComponent {

	public guid: string = "904e4b56-484a-4814-b35f-aa4baf362117";
	public name: string = "Brep | Brep";
	public category: string = "Intersect";
	public subCategory: string = "Physical";
	public description: string = "Solve intersection events for two Breps.";
	public isObsolete: boolean = false;

	public library: string = "Surface Components";

}