import ResthopperComponent from './../../../../models/ResthopperComponent';
import ResthopperParameter from './../../../../models/ResthopperParameter';
import { newGuid } from './../../../../utils/Guid';

export default class TriangleTrigonometry extends ResthopperComponent {

	public guid: string = "92af1a02-9b87-43a0-8c45-0ce1b81555ec";
	public name: string = "Triangle Trigonometry";
	public category: string = "Maths";
	public subCategory: string = "Trig";
	public description: string = "Generic triangle trigonometry";
	public isObsolete: boolean = false;

	public library: string = "Transform Components";

}