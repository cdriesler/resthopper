import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export class FragmentPatch extends ResthopperComponent {

	public guid: string = "cb56b26c-2595-4d03-bdb2-eb2e6aeba82d";
	public name: string = "Fragment Patch";
	public category: string = "Surface";
	public subCategory: string = "Freeform";
	public description: string = "Create a fragmented patch from a polyline boundary";
	public isObsolete: boolean = false;

	public library: string = "Surface Components";

}