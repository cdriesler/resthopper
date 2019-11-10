import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class MeshJoin extends ResthopperComponent {

	public guid: string = "4bc9dbbf-fec8-4348-a3af-e33e7edc8e7b";
	public name: string = "Mesh Join";
	public category: string = "Mesh";
	public subCategory: string = "Util";
	public description: string = "Join a set of meshes into a single mesh";
	public isObsolete: boolean = false;

	public library: string = "Surface Components";

}