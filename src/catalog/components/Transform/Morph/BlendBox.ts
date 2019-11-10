import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class BlendBox extends ResthopperComponent {

	public guid: string = "6283fb37-e273-4eb2-8d2a-e347881e3928";
	public name: string = "Blend Box";
	public category: string = "Transform";
	public subCategory: string = "Morph";
	public description: string = "Create a twisted box between two surfaces.";
	public isObsolete: boolean = false;

	public library: string = "Transform Components";

}