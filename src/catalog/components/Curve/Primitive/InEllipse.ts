import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class InEllipse extends ResthopperComponent {

	public guid: string = "679a9c6a-ab97-4c20-b02c-680f9a9a1a44";
	public name: string = "InEllipse";
	public category: string = "Curve";
	public subCategory: string = "Primitive";
	public description: string = "Create the inscribed ellipse (Steiner ellipse) of a triangle.";
	public isObsolete: boolean = false;

	public library: string = "Curve Components";

}