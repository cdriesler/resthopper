import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export class SmoothMesh extends ResthopperComponent {

	public guid: string = "e45aa4a0-e40d-421c-a335-5185dd131836";
	public name: string = "Smooth Mesh";
	public category: string = "Mesh";
	public subCategory: string = "Util";
	public description: string = "Smooth the vertices of a mesh";
	public isObsolete: boolean = false;

	public library: string = "Triangulation Components";

}