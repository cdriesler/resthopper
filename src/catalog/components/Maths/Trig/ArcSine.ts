import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class ArcSine extends ResthopperComponent {

	public guid: string = "cc15ba56-fae7-4f05-b599-cb7c43b60e11";
	public name: string = "ArcSine";
	public category: string = "Maths";
	public subCategory: string = "Trig";
	public description: string = "Compute the angle whose sine is the specified value.";
	public isObsolete: boolean = false;

	public library: string = "Math Components";

}