import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export class Move extends ResthopperComponent {

	public guid: string = "e9eb1dcf-92f6-4d4d-84ae-96222d60f56b";
	public name: string = "Move";
	public category: string = "Transform";
	public subCategory: string = "Euclidean";
	public description: string = "Translate (move) an object along a vector.";
	public isObsolete: boolean = false;

	public library: string = "Transform Components";

}