import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class Cone extends ResthopperComponent {

	public guid: string = "03e331ed-c4d1-4a23-afa2-f57b87d2043c";
	public name: string = "Cone";
	public category: string = "Surface";
	public subCategory: string = "Primitive";
	public description: string = "Create a conical surface";
	public isObsolete: boolean = false;

	public library: string = "Surface Components";

}