import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export class MeshSurface extends ResthopperComponent {

	public guid: string = "58cf422f-19f7-42f7-9619-fc198c51c657";
	public name: string = "Mesh Surface";
	public category: string = "Mesh";
	public subCategory: string = "Util";
	public description: string = "Create a Surface UV mesh";
	public isObsolete: boolean = false;

	public library: string = "Surface Components";

}