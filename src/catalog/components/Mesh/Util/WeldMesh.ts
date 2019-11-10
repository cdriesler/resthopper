import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class WeldMesh extends ResthopperComponent {

	public guid: string = "9f6d85c9-1143-4538-bca7-69dcb11a74ef";
	public name: string = "Weld Mesh";
	public category: string = "Mesh";
	public subCategory: string = "Util";
	public description: string = "Weld (merge) creases in a mesh";
	public isObsolete: boolean = false;

	public library: string = "Surface Components";

}