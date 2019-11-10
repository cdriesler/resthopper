import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class Transform extends ResthopperComponent {

	public guid: string = "610e689b-5adc-47b3-af8f-e3a32b7ea341";
	public name: string = "Transform";
	public category: string = "Transform";
	public subCategory: string = "Util";
	public description: string = "Transform an object.";
	public isObsolete: boolean = false;

	public library: string = "Transform Components";

}