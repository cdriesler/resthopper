import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class Scale extends ResthopperComponent {

	public guid: string = "4d2a06bd-4b0f-4c65-9ee0-4220e4c01703";
	public name: string = "Scale";
	public category: string = "Transform";
	public subCategory: string = "Affine";
	public description: string = "Scale an object uniformly in all directions.";
	public isObsolete: boolean = false;

	public library: string = "Transform Components";

}