import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export class Quadrangulate extends ResthopperComponent {

	public guid: string = "9266a2bb-918f-4675-9c91-f67d0dd33eac";
	public name: string = "Quadrangulate";
	public category: string = "Mesh";
	public subCategory: string = "Util";
	public description: string = "Quadrangulate as many triangles as possible in a mesh";
	public isObsolete: boolean = false;

	public library: string = "Surface Components";

}