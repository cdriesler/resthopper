import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class VectorXYZ extends ResthopperComponent {

	public guid: string = "56b92eab-d121-43f7-94d3-6cd8f0ddead8";
	public name: string = "Vector XYZ";
	public category: string = "Vector";
	public subCategory: string = "Vector";
	public description: string = "Create a vector from {xyz} components.";
	public isObsolete: boolean = false;

	public library: string = "Vector Components";

}