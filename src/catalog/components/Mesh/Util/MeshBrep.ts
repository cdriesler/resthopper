import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class MeshBrep extends ResthopperComponent {

	public guid: string = "60e7defa-8b21-4ee1-99aa-a9223d6134ff";
	public name: string = "Mesh Brep";
	public category: string = "Mesh";
	public subCategory: string = "Util";
	public description: string = "Create a mesh that approximates Brep geometry";
	public isObsolete: boolean = false;

	public library: string = "Surface Components";

}