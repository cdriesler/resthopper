import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class PointInBrep extends ResthopperComponent {

	public guid: string = "e03561f8-0e66-41d3-afde-62049f152443";
	public name: string = "Point In Brep";
	public category: string = "Surface";
	public subCategory: string = "Analysis";
	public description: string = "Test whether a point is inside a closed brep";
	public isObsolete: boolean = false;

	public library: string = "Surface Components";

}