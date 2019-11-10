import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class Length extends ResthopperComponent {

	public guid: string = "c75b62fa-0a33-4da7-a5bd-03fd0068fd93";
	public name: string = "Length";
	public category: string = "Curve";
	public subCategory: string = "Analysis";
	public description: string = "Measure the length of a curve.";
	public isObsolete: boolean = false;

	public library: string = "Curve Components";

}