import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class CullFaces extends ResthopperComponent {

	public guid: string = "57edd208-760a-4f0f-87e6-ca1bbd74133b";
	public name: string = "Cull Faces";
	public category: string = "Mesh";
	public subCategory: string = "Util";
	public description: string = "Cull faces from a mesh";
	public isObsolete: boolean = false;

	public library: string = "Surface Components";

}