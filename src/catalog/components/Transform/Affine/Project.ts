import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export class Project extends ResthopperComponent {

	public guid: string = "23285717-156c-468f-a691-b242488c06a6";
	public name: string = "Project";
	public category: string = "Transform";
	public subCategory: string = "Affine";
	public description: string = "Project an object onto a plane.";
	public isObsolete: boolean = false;

	public library: string = "Transform Components";

}