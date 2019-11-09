import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export class Volume extends ResthopperComponent {

	public guid: string = "224f7648-5956-4b26-80d9-8d771f3dfd5d";
	public name: string = "Volume";
	public category: string = "Surface";
	public subCategory: string = "Analysis";
	public description: string = "Solve volume properties for closed breps and meshes.";
	public isObsolete: boolean = false;

	public library: string = "Surface Components";

}