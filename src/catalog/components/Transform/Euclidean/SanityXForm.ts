import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export class SanityXForm extends ResthopperComponent {

	public guid: string = "03b3db66-d7e8-4d2d-bc0c-122913317254";
	public name: string = "Sanity XForm";
	public category: string = "Transform";
	public subCategory: string = "Euclidean";
	public description: string = "Apply a sanity transformation to f a r - a w a y, tiny or HUGE geometry";
	public isObsolete: boolean = false;

	public library: string = "Transform Components";

}