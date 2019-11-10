import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class Curvature extends ResthopperComponent {

	public guid: string = "aaa665bd-fd6e-4ccb-8d2c-c5b33072125d";
	public name: string = "Curvature";
	public category: string = "Curve";
	public subCategory: string = "Analysis";
	public description: string = "Evaluate the curvature of a curve at a specified parameter.";
	public isObsolete: boolean = false;

	public library: string = "Curve Components";

}