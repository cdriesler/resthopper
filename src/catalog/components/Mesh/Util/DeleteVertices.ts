import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class DeleteVertices extends ResthopperComponent {

	public guid: string = "23d715f7-4bc6-4e69-b76d-7c04ca2ebf5f";
	public name: string = "Delete Vertices";
	public category: string = "Mesh";
	public subCategory: string = "Util";
	public description: string = "Delete vertices from a mesh";
	public isObsolete: boolean = false;

	public library: string = "Surface Components";

}