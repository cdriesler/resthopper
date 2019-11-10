import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class DeconstuctRectangle extends ResthopperComponent {

	public guid: string = "e5c33a79-53d5-4f2b-9a97-d3d45c780edc";
	public name: string = "Deconstuct Rectangle";
	public category: string = "Curve";
	public subCategory: string = "Analysis";
	public description: string = "Retrieve the base plane and side intervals of a rectangle.";
	public isObsolete: boolean = false;

	public library: string = "Curve Components";

}