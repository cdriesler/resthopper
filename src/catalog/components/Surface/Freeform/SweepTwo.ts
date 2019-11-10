import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class SweepTwo extends ResthopperComponent {

	public guid: string = "75164624-395a-4d24-b60b-6bf91cab0194";
	public name: string = "Sweep2";
	public category: string = "Surface";
	public subCategory: string = "Freeform";
	public description: string = "Create a sweep surface with two rail curves.";
	public isObsolete: boolean = false;

	public library: string = "Surface Components";

}