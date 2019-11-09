import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export class RightTrigonometry extends ResthopperComponent {

	public guid: string = "e75d4624-8ee2-4067-ac8d-c56bdc901d83";
	public name: string = "Right Trigonometry";
	public category: string = "Maths";
	public subCategory: string = "Trig";
	public description: string = "Right triangle trigonometry";
	public isObsolete: boolean = false;

	public library: string = "Transform Components";

}