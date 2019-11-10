import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class Extremes extends ResthopperComponent {

	public guid: string = "ebd6c758-19ae-4d74-aed7-b8a0392ff743";
	public name: string = "Extremes";
	public category: string = "Curve";
	public subCategory: string = "Analysis";
	public description: string = "Find the extremes (highest and lowest points) on a curve.";
	public isObsolete: boolean = false;

	public library: string = "Curve Components";

}