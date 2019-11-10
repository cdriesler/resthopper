import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class MeshSpray extends ResthopperComponent {

	public guid: string = "edcf10e1-02a0-48a4-ae2d-70c50d903dc8";
	public name: string = "Mesh Spray";
	public category: string = "Mesh";
	public subCategory: string = "Primitive";
	public description: string = "Assign colours to a mesh based on spray points.";
	public isObsolete: boolean = false;

	public library: string = "Surface Components";

}