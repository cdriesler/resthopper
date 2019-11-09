import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export class SimpleMesh extends ResthopperComponent {

	public guid: string = "c3f9cea5-6fd4-4db5-959b-08cd08ed9fe1";
	public name: string = "Simple Mesh";
	public category: string = "Mesh";
	public subCategory: string = "Util";
	public description: string = "Create a mesh that represents a Brep as simply as possible";
	public isObsolete: boolean = false;

	public library: string = "Surface Components";

}