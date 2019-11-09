import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export class BoxTwoPt extends ResthopperComponent {

	public guid: string = "2a43ef96-8f87-4892-8b94-237a47e8d3cf";
	public name: string = "Box 2Pt";
	public category: string = "Surface";
	public subCategory: string = "Primitive";
	public description: string = "Create a box defined by two points.";
	public isObsolete: boolean = false;

	public library: string = "Surface Components";

}