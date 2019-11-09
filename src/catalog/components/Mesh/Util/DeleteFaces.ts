import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export class DeleteFaces extends ResthopperComponent {

	public guid: string = "d0f1311b-8287-4484-b2ea-1475c6770926";
	public name: string = "Delete Faces";
	public category: string = "Mesh";
	public subCategory: string = "Util";
	public description: string = "Delete faces from a mesh";
	public isObsolete: boolean = false;

	public library: string = "Surface Components";

}