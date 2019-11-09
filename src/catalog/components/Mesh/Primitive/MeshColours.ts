import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export class MeshColours extends ResthopperComponent {

	public guid: string = "d2cedf38-1149-4adc-8dbf-b06571cb5106";
	public name: string = "Mesh Colours";
	public category: string = "Mesh";
	public subCategory: string = "Primitive";
	public description: string = "Assign a repeating colour pattern to a mesh object.";
	public isObsolete: boolean = false;

	public library: string = "Surface Components";

}