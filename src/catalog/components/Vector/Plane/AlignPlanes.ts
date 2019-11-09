import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export class AlignPlanes extends ResthopperComponent {

	public guid: string = "2318aee8-01fe-4ea8-9524-6966023fc622";
	public name: string = "Align Planes";
	public category: string = "Vector";
	public subCategory: string = "Plane";
	public description: string = "Align planes by minimizing their serial rotation.";
	public isObsolete: boolean = false;

	public library: string = "Vector Components";

}