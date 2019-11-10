import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class ConvexEdges extends ResthopperComponent {

	public guid: string = "8248da39-0729-4e04-8395-267b3259bc2f";
	public name: string = "Convex Edges";
	public category: string = "Surface";
	public subCategory: string = "Util";
	public description: string = "Select concave or convex brep edges.";
	public isObsolete: boolean = false;

	public library: string = "Curve Components";

}