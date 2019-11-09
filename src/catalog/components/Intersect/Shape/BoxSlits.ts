import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export class BoxSlits extends ResthopperComponent {

	public guid: string = "2d3b6ef3-5c26-4e2f-bcb3-8ffb9fb0f7c3";
	public name: string = "Box Slits";
	public category: string = "Intersect";
	public subCategory: string = "Shape";
	public description: string = "Add slits to a collection of intersecting boxes";
	public isObsolete: boolean = false;

	public library: string = "Surface Components";

}