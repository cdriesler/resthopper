import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export class AreaMoments extends ResthopperComponent {

	public guid: string = "c98c1666-5f29-4bb8-aafd-bb5a708e8a95";
	public name: string = "Area Moments";
	public category: string = "Surface";
	public subCategory: string = "Analysis";
	public description: string = "Solve area moments for breps, meshes and planar closed curves.";
	public isObsolete: boolean = false;

	public library: string = "Surface Components";

}