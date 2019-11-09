import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export class SubDfromMesh extends ResthopperComponent {

	public guid: string = "855a2c73-31c0-41d2-b061-57d54229d11b";
	public name: string = "Sub-D from Mesh";
	public category: string = "Surface";
	public subCategory: string = "SubD";
	public description: string = "Create a subdivision surface from a control mesh";
	public isObsolete: boolean = false;

	public library: string = "Transform Components";

}