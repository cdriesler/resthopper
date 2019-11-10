import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class MeshDifference extends ResthopperComponent {

	public guid: string = "4f3147f4-9fcd-4a7e-be0e-b1841caa5f97";
	public name: string = "Mesh Difference";
	public category: string = "Intersect";
	public subCategory: string = "Shape";
	public description: string = "Perform a solid difference on two sets of meshes";
	public isObsolete: boolean = false;

	public library: string = "Surface Components";

}