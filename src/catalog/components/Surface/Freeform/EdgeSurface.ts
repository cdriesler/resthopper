import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class EdgeSurface extends ResthopperComponent {

	public guid: string = "36132830-e2ef-4476-8ea1-6a43922344f0";
	public name: string = "Edge Surface";
	public category: string = "Surface";
	public subCategory: string = "Freeform";
	public description: string = "Create a surface from two, three or four edge curves.";
	public isObsolete: boolean = false;

	public library: string = "Surface Components";

}