import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class Patch extends ResthopperComponent {

	public guid: string = "57b2184c-8931-4e70-9220-612ec5b3809a";
	public name: string = "Patch";
	public category: string = "Surface";
	public subCategory: string = "Freeform";
	public description: string = "Create a patch surface";
	public isObsolete: boolean = false;

	public library: string = "Surface Components";

}