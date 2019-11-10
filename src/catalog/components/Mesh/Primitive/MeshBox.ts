import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class MeshBox extends ResthopperComponent {

	public guid: string = "2696bd14-3fb5-4750-827f-86df6c31d664";
	public name: string = "Mesh Box";
	public category: string = "Mesh";
	public subCategory: string = "Primitive";
	public description: string = "Create a mesh box.";
	public isObsolete: boolean = false;

	public library: string = "Surface Components";

}