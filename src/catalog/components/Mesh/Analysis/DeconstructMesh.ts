import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export class DeconstructMesh extends ResthopperComponent {

	public guid: string = "ba2d8f57-0738-42b4-b5a5-fe4d853517eb";
	public name: string = "Deconstruct Mesh";
	public category: string = "Mesh";
	public subCategory: string = "Analysis";
	public description: string = "Deconstruct a mesh into its component parts.";
	public isObsolete: boolean = false;

	public library: string = "Surface Components";

}