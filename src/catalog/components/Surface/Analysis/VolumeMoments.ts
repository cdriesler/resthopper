import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export class VolumeMoments extends ResthopperComponent {

	public guid: string = "4b5f79e1-c2b3-4b9c-b97d-470145a3ca74";
	public name: string = "Volume Moments";
	public category: string = "Surface";
	public subCategory: string = "Analysis";
	public description: string = "Solve volume properties for closed breps and meshes.";
	public isObsolete: boolean = false;

	public library: string = "Surface Components";

}