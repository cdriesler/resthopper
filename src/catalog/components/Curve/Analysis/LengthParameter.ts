import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export class LengthParameter extends ResthopperComponent {

	public guid: string = "a1c16251-74f0-400f-9e7c-5e379d739963";
	public name: string = "Length Parameter";
	public category: string = "Curve";
	public subCategory: string = "Analysis";
	public description: string = "Measure the length of a curve to and from a parameter.";
	public isObsolete: boolean = false;

	public library: string = "Curve Components";

}