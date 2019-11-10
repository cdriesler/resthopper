import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class CullVertices extends ResthopperComponent {

	public guid: string = "9d50bf9b-46bc-403a-9ec9-1052f51dd6b6";
	public name: string = "Cull Vertices";
	public category: string = "Mesh";
	public subCategory: string = "Util";
	public description: string = "Cull vertices from a mesh";
	public isObsolete: boolean = false;

	public library: string = "Surface Components";

}