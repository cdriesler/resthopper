import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export class BendDeform extends ResthopperComponent {

	public guid: string = "539f5564-4fc0-4fc1-a7d3-b802fa2ef072";
	public name: string = "Bend Deform";
	public category: string = "Transform";
	public subCategory: string = "Morph";
	public description: string = "Deform a shape by bending it";
	public isObsolete: boolean = false;

	public library: string = "Transform Components";

}