import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export class Rotate extends ResthopperComponent {

	public guid: string = "b7798b74-037e-4f0c-8ac7-dc1043d093e0";
	public name: string = "Rotate";
	public category: string = "Transform";
	public subCategory: string = "Euclidean";
	public description: string = "Rotate an object in a plane.";
	public isObsolete: boolean = false;

	public library: string = "Transform Components";

}