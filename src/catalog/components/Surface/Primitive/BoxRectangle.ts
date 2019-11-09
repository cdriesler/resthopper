import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export class BoxRectangle extends ResthopperComponent {

	public guid: string = "d0a56c9e-2483-45e7-ab98-a450b97f1bc0";
	public name: string = "Box Rectangle";
	public category: string = "Surface";
	public subCategory: string = "Primitive";
	public description: string = "Create a box defined by a rectangle and a height.";
	public isObsolete: boolean = false;

	public library: string = "Surface Components";

}