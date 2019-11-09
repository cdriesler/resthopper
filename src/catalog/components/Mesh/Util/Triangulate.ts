import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export class Triangulate extends ResthopperComponent {

	public guid: string = "3fba11d5-b30a-4146-8d80-d591e7a0a287";
	public name: string = "Triangulate";
	public category: string = "Mesh";
	public subCategory: string = "Util";
	public description: string = "Triangulate all quads in a mesh";
	public isObsolete: boolean = false;

	public library: string = "Surface Components";

}