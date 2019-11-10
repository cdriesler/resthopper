import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class PerpendicularDisplay extends ResthopperComponent {

	public guid: string = "bf106e4c-68f4-476f-b05b-9c15fb50e078";
	public name: string = "Perpendicular Display";
	public category: string = "Vector";
	public subCategory: string = "Field";
	public description: string = "Display the perpendicularity of a field through a section";
	public isObsolete: boolean = false;

	public library: string = "Field Components";

}