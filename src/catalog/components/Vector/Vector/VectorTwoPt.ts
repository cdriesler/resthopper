import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class VectorTwoPt extends ResthopperComponent {

	public guid: string = "934ede4a-924a-4973-bb05-0dc4b36fae75";
	public name: string = "Vector 2Pt";
	public category: string = "Vector";
	public subCategory: string = "Vector";
	public description: string = "Create a vector between two points.";
	public isObsolete: boolean = false;

	public library: string = "Vector Components";

}