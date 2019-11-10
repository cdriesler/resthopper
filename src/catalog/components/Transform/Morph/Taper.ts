import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class Taper extends ResthopperComponent {

	public guid: string = "ad0ee51e-c86f-4668-8de5-b55b850f6001";
	public name: string = "Taper";
	public category: string = "Transform";
	public subCategory: string = "Morph";
	public description: string = "Deforms objects toward or away from an axis";
	public isObsolete: boolean = false;

	public library: string = "Transform Components";

}