import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export class IsoVistRay extends ResthopperComponent {

	public guid: string = "93d0dcbc-6207-4745-aaf7-fe57a880f959";
	public name: string = "IsoVist Ray";
	public category: string = "Intersect";
	public subCategory: string = "Mathematical";
	public description: string = "Compute a single isovist sample at a location";
	public isObsolete: boolean = false;

	public library: string = "Triangulation Components";

}