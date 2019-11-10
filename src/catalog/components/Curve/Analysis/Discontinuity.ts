import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class Discontinuity extends ResthopperComponent {

	public guid: string = "269eaa85-9997-4d77-a9ba-4c58cb45c9d3";
	public name: string = "Discontinuity";
	public category: string = "Curve";
	public subCategory: string = "Analysis";
	public description: string = "Find all discontinuities along a curve.";
	public isObsolete: boolean = false;

	public library: string = "Curve Components";

}