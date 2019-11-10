import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class Occlusion extends ResthopperComponent {

	public guid: string = "1583bd7e-4ab7-4439-b922-d6f8cd63c399";
	public name: string = "Occlusion";
	public category: string = "Mesh";
	public subCategory: string = "Util";
	public description: string = "Solve occlusion for a collection of view rays and obstructions.";
	public isObsolete: boolean = false;

	public library: string = "Surface Components";

}