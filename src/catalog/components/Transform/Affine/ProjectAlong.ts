import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class ProjectAlong extends ResthopperComponent {

	public guid: string = "06d7bc4a-ba3e-4445-8ab5-079613b52f28";
	public name: string = "Project Along";
	public category: string = "Transform";
	public subCategory: string = "Affine";
	public description: string = "Project an object onto a plane along a direction.";
	public isObsolete: boolean = false;

	public library: string = "Transform Components";

}