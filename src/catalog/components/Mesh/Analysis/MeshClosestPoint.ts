import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class MeshClosestPoint extends ResthopperComponent {

	public guid: string = "a559fee2-4b76-4370-8042-c7440cd75049";
	public name: string = "Mesh Closest Point";
	public category: string = "Mesh";
	public subCategory: string = "Analysis";
	public description: string = "Finds the closest point on a mesh";
	public isObsolete: boolean = false;

	public library: string = "Surface Components";

}