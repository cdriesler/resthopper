import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class TwoByFourJam extends ResthopperComponent {

	public guid: string = "c21e7bd5-b1f2-4448-ac56-206f98f90aa7";
	public name: string = "TwoByFourJam";
	public category: string = "Curve";
	public subCategory: string = "Primitive";
	public description: string = "Jam a two-by-four into a crooked room";
	public isObsolete: boolean = false;

	public library: string = "Curve Components";

}