import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class RelativeItem extends ResthopperComponent {

	public guid: string = "fac0d5be-e3ff-4bbb-9742-ec9a54900d41";
	public name: string = "Relative Item";
	public category: string = "Sets";
	public subCategory: string = "Tree";
	public description: string = "Retrieve a relative item combo from a data tree";
	public isObsolete: boolean = false;

	public library: string = "Math Components";

}