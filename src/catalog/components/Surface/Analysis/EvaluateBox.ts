import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class EvaluateBox extends ResthopperComponent {

	public guid: string = "13b40e9c-3aed-4669-b2e8-60bd02091421";
	public name: string = "Evaluate Box";
	public category: string = "Surface";
	public subCategory: string = "Analysis";
	public description: string = "Evaluate a box in normalised {UVW} space.";
	public isObsolete: boolean = false;

	public library: string = "Surface Components";

}