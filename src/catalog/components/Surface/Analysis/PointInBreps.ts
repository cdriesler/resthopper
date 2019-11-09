import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export class PointInBreps extends ResthopperComponent {

	public guid: string = "859daa86-3ab7-49cb-9eda-f2811c984070";
	public name: string = "Point In Breps";
	public category: string = "Surface";
	public subCategory: string = "Analysis";
	public description: string = "Test whether a point is inside a collection of closed breps";
	public isObsolete: boolean = false;

	public library: string = "Surface Components";

}