import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class MeshSplitPlane extends ResthopperComponent {

	public guid: string = "330eb9c9-0098-4375-9078-e00a419d49fb";
	public name: string = "Mesh Split Plane";
	public category: string = "Mesh";
	public subCategory: string = "Util";
	public description: string = "Split a mesh with an infinite plane.";
	public isObsolete: boolean = false;

	public library: string = "Surface Components";

}