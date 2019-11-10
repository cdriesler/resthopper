import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class MoveAwayFrom extends ResthopperComponent {

	public guid: string = "dd9f597a-4db0-42b1-9cb2-5607ec97db09";
	public name: string = "Move Away From";
	public category: string = "Transform";
	public subCategory: string = "Euclidean";
	public description: string = "Translate (move) an object away from another object.";
	public isObsolete: boolean = false;

	public library: string = "Transform Components";

}