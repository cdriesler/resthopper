import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class MeshPlane extends ResthopperComponent {

	public guid: string = "3b1ae469-0e9b-461d-8c30-fa5a7de8b7a9";
	public name: string = "Mesh | Plane";
	public category: string = "Intersect";
	public subCategory: string = "Mathematical";
	public description: string = "Solve intersection events for a Mesh and a Plane (otherwise known as section).";
	public isObsolete: boolean = false;

	public library: string = "Surface Components";

}