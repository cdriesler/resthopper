import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class MeshfromSubD extends ResthopperComponent {

	public guid: string = "c0b3c6e9-d05d-4c51-a0df-1ce2678c7a33";
	public name: string = "Mesh from Sub-D";
	public category: string = "Surface";
	public subCategory: string = "SubD";
	public description: string = "Get the approximation mesh of a Sub-D surface.";
	public isObsolete: boolean = false;

	public library: string = "Transform Components";

}