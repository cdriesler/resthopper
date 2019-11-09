import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export class EdgesfromLength extends ResthopperComponent {

	public guid: string = "ff187e6a-84bc-4bb9-a572-b39006a0576d";
	public name: string = "Edges from Length";
	public category: string = "Surface";
	public subCategory: string = "Util";
	public description: string = "Select brep edges based on length";
	public isObsolete: boolean = false;

	public library: string = "Curve Components";

}