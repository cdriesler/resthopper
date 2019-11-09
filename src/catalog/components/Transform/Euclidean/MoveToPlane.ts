import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export class MoveToPlane extends ResthopperComponent {

	public guid: string = "4fe87ef8-49e4-4605-9859-87940d62e1de";
	public name: string = "Move To Plane";
	public category: string = "Transform";
	public subCategory: string = "Euclidean";
	public description: string = "Translate (move) an object onto a plane.";
	public isObsolete: boolean = false;

	public library: string = "Transform Components";

}