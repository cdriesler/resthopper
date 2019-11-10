import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class IsoVist extends ResthopperComponent {

	public guid: string = "cab92254-1c79-4e5a-9972-0a4412b35c88";
	public name: string = "IsoVist";
	public category: string = "Intersect";
	public subCategory: string = "Mathematical";
	public description: string = "Compute an isovist sampling at a location";
	public isObsolete: boolean = false;

	public library: string = "Triangulation Components";

}