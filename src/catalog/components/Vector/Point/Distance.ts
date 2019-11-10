import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class Distance extends ResthopperComponent {

	public guid: string = "93b8e93d-f932-402c-b435-84be04d87666";
	public name: string = "Distance";
	public category: string = "Vector";
	public subCategory: string = "Point";
	public description: string = "Compute Euclidean distance between two point coordinates.";
	public isObsolete: boolean = false;

	public library: string = "Vector Components";

}