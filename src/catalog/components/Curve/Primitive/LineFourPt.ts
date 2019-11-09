import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export class LineFourPt extends ResthopperComponent {

	public guid: string = "b9fde5fa-d654-4306-8ee1-6b69e6757604";
	public name: string = "Line 4Pt";
	public category: string = "Curve";
	public subCategory: string = "Primitive";
	public description: string = "Create a line from four points.";
	public isObsolete: boolean = false;

	public library: string = "Curve Components";

}