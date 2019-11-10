import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class DisjointMesh extends ResthopperComponent {

	public guid: string = "4dce5963-dc1a-4710-8991-9437ea23888d";
	public name: string = "Disjoint Mesh";
	public category: string = "Mesh";
	public subCategory: string = "Util";
	public description: string = "Split a mesh into disjoint pieces.";
	public isObsolete: boolean = false;

	public library: string = "Surface Components";

}