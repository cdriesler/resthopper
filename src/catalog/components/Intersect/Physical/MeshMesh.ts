import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export class MeshMesh extends ResthopperComponent {

	public guid: string = "21b6a605-9568-4bf8-acc1-631565d609d7";
	public name: string = "Mesh | Mesh";
	public category: string = "Intersect";
	public subCategory: string = "Physical";
	public description: string = "Mesh Mesh intersection";
	public isObsolete: boolean = false;

	public library: string = "Surface Components";

}