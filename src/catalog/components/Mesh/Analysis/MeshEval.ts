import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export class MeshEval extends ResthopperComponent {

	public guid: string = "b2dc090f-b022-4264-8889-87e22979336e";
	public name: string = "Mesh Eval";
	public category: string = "Mesh";
	public subCategory: string = "Analysis";
	public description: string = "Evaluate a mesh at a given parameter";
	public isObsolete: boolean = false;

	public library: string = "Surface Components";

}