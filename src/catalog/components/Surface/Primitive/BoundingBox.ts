import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class BoundingBox extends ResthopperComponent {

	public guid: string = "0bb3d234-9097-45db-9998-621639c87d3b";
	public name: string = "Bounding Box";
	public category: string = "Surface";
	public subCategory: string = "Primitive";
	public description: string = "Solve oriented geometry bounding boxes.";
	public isObsolete: boolean = false;

	public library: string = "Surface Components";

}