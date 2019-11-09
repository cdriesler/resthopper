import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export class AlignVertices extends ResthopperComponent {

	public guid: string = "db661dd7-63a4-44c6-91f2-6faab2471383";
	public name: string = "Align Vertices";
	public category: string = "Mesh";
	public subCategory: string = "Util";
	public description: string = "Align nearby vertices in a mesh";
	public isObsolete: boolean = false;

	public library: string = "Surface Components";

}