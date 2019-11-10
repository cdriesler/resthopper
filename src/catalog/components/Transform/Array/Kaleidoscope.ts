import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class Kaleidoscope extends ResthopperComponent {

	public guid: string = "b90eaa92-6e38-4054-a915-afcf486224b3";
	public name: string = "Kaleidoscope";
	public category: string = "Transform";
	public subCategory: string = "Array";
	public description: string = "Apply a kaleidoscope transformation to an object.";
	public isObsolete: boolean = false;

	public library: string = "Transform Components";

}