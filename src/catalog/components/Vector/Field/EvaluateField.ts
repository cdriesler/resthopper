import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class EvaluateField extends ResthopperComponent {

	public guid: string = "a7c9f738-f8bd-4f64-8e7f-33341183e493";
	public name: string = "Evaluate Field";
	public category: string = "Vector";
	public subCategory: string = "Field";
	public description: string = "Evaluate a field at a point";
	public isObsolete: boolean = false;

	public library: string = "Field Components";

}