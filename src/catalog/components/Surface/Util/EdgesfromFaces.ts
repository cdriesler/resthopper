import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class EdgesfromFaces extends ResthopperComponent {

	public guid: string = "71e99dbb-2d79-4f02-a8a6-e87a09d54f47";
	public name: string = "Edges from Faces";
	public category: string = "Surface";
	public subCategory: string = "Util";
	public description: string = "Select all brep edges that delineate certain faces";
	public isObsolete: boolean = false;

	public library: string = "Curve Components";

}