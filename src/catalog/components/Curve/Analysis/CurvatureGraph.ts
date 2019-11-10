import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class CurvatureGraph extends ResthopperComponent {

	public guid: string = "7376fe41-74ec-497e-b367-1ffe5072608b";
	public name: string = "Curvature Graph";
	public category: string = "Curve";
	public subCategory: string = "Analysis";
	public description: string = "Draws Rhino Curvature Graphs.";
	public isObsolete: boolean = false;

	public library: string = "Grasshopper";

}