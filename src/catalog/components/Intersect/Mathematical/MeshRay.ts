import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export class MeshRay extends ResthopperComponent {

	public guid: string = "4c02a168-9aba-4f42-8951-2719f24d391f";
	public name: string = "Mesh | Ray";
	public category: string = "Intersect";
	public subCategory: string = "Mathematical";
	public description: string = "Intersect a mesh with a semi-infinite ray";
	public isObsolete: boolean = false;

	public library: string = "Surface Components";

}