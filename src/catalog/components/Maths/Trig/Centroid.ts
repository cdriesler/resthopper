import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class Centroid extends ResthopperComponent {

	public guid: string = "afbcbad4-2a2a-4954-8040-d999e316d2bd";
	public name: string = "Centroid";
	public category: string = "Maths";
	public subCategory: string = "Trig";
	public description: string = "Generate the triangle centroid from medians.";
	public isObsolete: boolean = false;

	public library: string = "Transform Components";

}