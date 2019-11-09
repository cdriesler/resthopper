import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export class Area extends ResthopperComponent {

	public guid: string = "2e205f24-9279-47b2-b414-d06dcd0b21a7";
	public name: string = "Area";
	public category: string = "Surface";
	public subCategory: string = "Analysis";
	public description: string = "Solve area properties for breps, meshes and planar closed curves.";
	public isObsolete: boolean = false;

	public library: string = "Surface Components";

}