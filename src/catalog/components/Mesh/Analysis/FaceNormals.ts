import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export class FaceNormals extends ResthopperComponent {

	public guid: string = "cb4ca22c-3419-4962-a078-ad4ff7f1f929";
	public name: string = "Face Normals";
	public category: string = "Mesh";
	public subCategory: string = "Analysis";
	public description: string = "Extract the normals and center points of all faces in a mesh";
	public isObsolete: boolean = false;

	public library: string = "Surface Components";

}