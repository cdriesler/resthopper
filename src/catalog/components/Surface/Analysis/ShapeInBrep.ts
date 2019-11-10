import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class ShapeInBrep extends ResthopperComponent {

	public guid: string = "2ba64356-be21-4c12-bbd4-ced54f04c8ef";
	public name: string = "Shape In Brep";
	public category: string = "Surface";
	public subCategory: string = "Analysis";
	public description: string = "Tests whether a shape is inside a brep";
	public isObsolete: boolean = false;

	public library: string = "Surface Components";

}