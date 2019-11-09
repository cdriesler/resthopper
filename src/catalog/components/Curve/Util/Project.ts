import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export class Project extends ResthopperComponent {

	public guid: string = "d7ee52ff-89b8-4d1a-8662-3e0dd391d0af";
	public name: string = "Project";
	public category: string = "Curve";
	public subCategory: string = "Util";
	public description: string = "Project a curve onto a Brep.";
	public isObsolete: boolean = false;

	public library: string = "Curve Components";

}