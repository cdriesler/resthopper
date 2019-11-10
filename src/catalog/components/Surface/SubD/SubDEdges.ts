import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class SubDEdges extends ResthopperComponent {

	public guid: string = "2183c4c6-b5b3-45d2-9261-2096c9357f92";
	public name: string = "Sub-D Edges";
	public category: string = "Surface";
	public subCategory: string = "SubD";
	public description: string = "Extract all edge data from a Sub-D surface.";
	public isObsolete: boolean = false;

	public library: string = "Transform Components";

}