import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class Derivatives extends ResthopperComponent {

	public guid: string = "ab14760f-87a6-462e-b481-4a2c26a9a0d7";
	public name: string = "Derivatives";
	public category: string = "Curve";
	public subCategory: string = "Analysis";
	public description: string = "Evaluate the derivatives of a curve at a specified parameter.";
	public isObsolete: boolean = false;

	public library: string = "Curve Components";

}