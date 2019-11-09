import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export class SurfaceBox extends ResthopperComponent {

	public guid: string = "4f65c681-9331-4818-9d54-6290cae686c3";
	public name: string = "Surface Box";
	public category: string = "Transform";
	public subCategory: string = "Morph";
	public description: string = "Create a twisted box on a surface patch.";
	public isObsolete: boolean = false;

	public library: string = "Transform Components";

}