import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export class BrepEdges extends ResthopperComponent {

	public guid: string = "0148a65d-6f42-414a-9db7-9a9b2eb78437";
	public name: string = "Brep Edges";
	public category: string = "Surface";
	public subCategory: string = "Analysis";
	public description: string = "Extract the edge curves of a brep.";
	public isObsolete: boolean = false;

	public library: string = "Surface Components";

}