import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class MeshDepth extends ResthopperComponent {

	public guid: string = "07a3b2a0-c4d0-4638-9044-39ac4681e782";
	public name: string = "Mesh Depth";
	public category: string = "Mesh";
	public subCategory: string = "Analysis";
	public description: string = "Validate the depth of a mesh.";
	public isObsolete: boolean = false;

	public library: string = "Surface Components";

}