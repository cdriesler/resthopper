import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class UnifyMesh extends ResthopperComponent {

	public guid: string = "ca6a48f4-b681-4989-b0c1-301a2929a84c";
	public name: string = "Unify Mesh";
	public category: string = "Mesh";
	public subCategory: string = "Util";
	public description: string = "Unify the normals of a mesh";
	public isObsolete: boolean = false;

	public library: string = "Surface Components";

}