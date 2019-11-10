import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class FlipMesh extends ResthopperComponent {

	public guid: string = "47fbc929-e88a-4a13-882e-dad84763256d";
	public name: string = "Flip Mesh";
	public category: string = "Mesh";
	public subCategory: string = "Util";
	public description: string = "Flip the normal vectors of a mesh";
	public isObsolete: boolean = false;

	public library: string = "Surface Components";

}